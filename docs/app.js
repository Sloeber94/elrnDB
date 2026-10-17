"use strict";

// Data: data/tree.json (nodes in document order), data/t/<id>.json (content
// blocks), data/search.json (plain text per node, loaded on first search).
// Node: [id, parentIndex, code, title, engineMask, periodMask, optionMask,
//        [[engineMask, periodMask] per distinct block], contentSize]

const $ = (selector, root = document) => root.querySelector(selector);
// Sidebar text is drawn from data-label via CSS so the browser's find (Ctrl+F) only hits the page.
const label = (text, cls = "", tag = "span") => `<${tag} class="${cls}" data-label="${esc(text)}"></${tag}>`;
const esc = (value) => String(value).replace(/[&<>"]/g, (c) => `&${{ "&": "amp", "<": "lt", ">": "gt", '"': "quot" }[c]};`);
const store = {
  get(key) { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* private mode */ } },
};

let meta, nodes = [], byId = new Map(), roots = [];
const state = { engine: -1, period: -1, options: 0, current: null };
const expanded = new Set();
const contentCache = new Map();
let searchText = null;

const full = (list) => (1 << list.length) - 1;
const engineMask = () => (state.engine < 0 ? full(meta.engines) : 1 << state.engine);
const periodMask = () => (state.period < 0 ? full(meta.periods) : 1 << state.period);
const fits = (e, d) => (e & engineMask()) && (d & periodMask());
const names = (mask, list) => list.filter((_, bit) => mask >> bit & 1);
const optionNames = (mask) => names(mask, meta.options.map((o) => o[1]));
const optionClass = (mask) => (!mask || !state.options ? "" : mask & state.options ? "match" : "other");

async function init() {
  meta = await (await fetch("data/tree.json")).json();
  nodes = meta.nodes.map(([id, parent, code, title, e, d, o, blocks, size], index) =>
    ({ id, index, parent: null, parentIndex: parent, code, title, e, d, o, blocks, size, children: [] }));
  for (const node of nodes) {
    byId.set(node.id, node);
    if (node.parentIndex < 0) roots.push(node);
    else { node.parent = nodes[node.parentIndex]; node.parent.children.push(node); }
  }
  document.title = `${meta.model} workshop manual`;
  $("#model").dataset.label = $("#model-wide").dataset.label = `${meta.model} workshop manual`;

  const theme = store.get("theme") || "system";
  applyTheme(theme);
  $("#theme").value = theme;
  Object.assign(state, store.get("filters") || {});
  readHash();
  buildFilters();
  bindEvents();
  refresh();
}

// ---------- filters & routing ----------

function readHash() {
  const [path, query = ""] = location.hash.replace(/^#\/?/, "").split("?");
  state.current = path ? byId.get(path) || path : null;
  const params = new URLSearchParams(query);
  if (params.has("engine")) state.engine = meta.engines.indexOf(params.get("engine"));
  if (params.has("period")) state.period = meta.periods.indexOf(params.get("period"));
  if (params.has("options")) {
    state.options = 0;
    for (const code of params.get("options")) {
      const bit = meta.options.findIndex((o) => o[0] === code);
      if (bit >= 0) state.options |= 1 << bit;
    }
  }
}

function writeHash() {
  const params = new URLSearchParams();
  if (state.engine >= 0) params.set("engine", meta.engines[state.engine]);
  if (state.period >= 0) params.set("period", meta.periods[state.period]);
  const codes = meta.options.filter((_, bit) => state.options >> bit & 1).map((o) => o[0]).join("");
  if (codes) params.set("options", codes);
  const id = state.current ? state.current.id || state.current : "";
  const query = params.toString();
  const hash = `#/${id}${query ? "?" + query : ""}`;
  if (hash !== location.hash) history.replaceState(null, "", hash);
  store.set("filters", { engine: state.engine, period: state.period, options: state.options });
}

function buildFilters() {
  const select = (el, list, all) => {
    el.innerHTML = `<option value="-1">${all}</option>` +
      list.map((name, i) => `<option value="${i}">${esc(name)}</option>`).join("");
  };
  select($("#engine"), meta.engines, "All engines");
  select($("#period"), meta.periods, "All production periods");
  $("#engine").value = state.engine;
  $("#period").value = state.period;
  $("#options").innerHTML = meta.options
    .map(([code, name, count], bit) => ({ name, count, bit }))
    .filter((o) => o.count)
    .sort((a, b) => b.count - a.count)
    .map((o) => `<label class="option"><input type="checkbox" value="${o.bit}"${state.options >> o.bit & 1 ? " checked" : ""}>
      ${label(o.name)}${label(o.count, "", "small")}</label>`)
    .join("");
}

function refresh() {
  for (let i = nodes.length - 1; i >= 0; i--) {
    const n = nodes[i];
    n.visible = Boolean(fits(n.e, n.d) && (n.blocks.some(([e, d]) => fits(e, d)) || n.children.some((c) => c.visible)));
  }
  const count = optionNames(state.options).length;
  $("#equipment-count").dataset.label = count ? `(${count})` : "";
  writeHash();
  renderTree();
  renderPage();
  if (!$("#results").hidden) runSearch();
}

function bindEvents() {
  window.addEventListener("hashchange", () => {
    readHash();
    $("#engine").value = state.engine;
    $("#period").value = state.period;
    document.body.classList.remove("nav-open");
    refresh();
  });
  $("#engine").addEventListener("change", (e) => { state.engine = +e.target.value; refresh(); });
  $("#period").addEventListener("change", (e) => { state.period = +e.target.value; refresh(); });
  $("#options").addEventListener("change", (e) => { state.options ^= 1 << +e.target.value; refresh(); });
  $("#clear-options").addEventListener("click", () => {
    state.options = 0;
    for (const box of document.querySelectorAll("#options input")) box.checked = false;
    refresh();
  });
  $("#menu").addEventListener("click", () => document.body.classList.toggle("nav-open"));
  $("#theme").addEventListener("change", (e) => { applyTheme(e.target.value); store.set("theme", e.target.value); });
  let resizeTimer;
  window.addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => fitFigures($("#page")), 150); });

  $("#tree").addEventListener("click", (e) => {
    const twisty = e.target.closest(".twisty");
    if (!twisty) return;
    const li = twisty.closest("li");
    const node = nodes[li.dataset.i];
    expanded.has(node.id) ? expanded.delete(node.id) : expanded.add(node.id);
    li.replaceWith(treeItem(node));
  });

  let timer;
  $("#search").addEventListener("input", () => { clearTimeout(timer); timer = setTimeout(runSearch, 150); });
  $("#search").addEventListener("keydown", (e) => {
    if (e.key === "Enter") $("#results a")?.click();
    if (e.key === "Escape") { e.target.value = ""; runSearch(); }
  });

  $("#page").addEventListener("click", (e) => {
    const jump = e.target.closest("a.jump");
    if (jump) {
      e.preventDefault();
      jump.closest(".content")?.querySelector(`[data-step="${jump.dataset.jump}"]`)?.scrollIntoView({ behavior: "smooth" });
    }
    const opTool = e.target.closest(".op-tools a");
    if (opTool) {  // navigate or open a new tab; do not toggle the dropdown
      e.preventDefault();
      e.stopPropagation();
      if (opTool.classList.contains("op-tab")) window.open(opTool.getAttribute("href"), "_blank", "noopener");
      else location.hash = opTool.getAttribute("href");
      return;
    }
    const img = e.target.closest("img.zoomable");
    if (img) openViewer(img);
    const toggle = e.target.closest("[data-expand]");
    if (toggle) {
      const open = toggle.dataset.expand === "all";
      for (const d of toggle.closest(".children").querySelectorAll(":scope > details")) d.open = open;
    }
  });
  $("#page").addEventListener("toggle", (e) => {
    const details = e.target;
    if (details.matches("details.sub") && details.open && !details.dataset.loaded) {
      details.dataset.loaded = "1";
      renderBody($(".sub-body", details), byId.get(details.dataset.id));
    }
    if (details.open) { fitFigures(details); details._load?.(); }
  }, true);

  bindViewer();
  bindSidebar();
  bindSearchScope();
}

// Sidebar width (drag the edge, double-click to reset) and hide/show; remembered per browser.
function bindSidebar() {
  const root = document.documentElement;
  const width = (w) => root.style.setProperty("--sidebar", `${w}px`);
  const save = () => store.set("sidebar", {
    width: root.style.getPropertyValue("--sidebar") ? parseInt(root.style.getPropertyValue("--sidebar")) : null,
    hidden: document.body.classList.contains("nav-hidden"),
  });
  const saved = store.get("sidebar") || {};
  if (saved.width) width(saved.width);
  document.body.classList.toggle("nav-hidden", Boolean(saved.hidden));

  const resizer = $("#resizer");
  const move = (e) => width(Math.min(600, Math.max(240, e.clientX)));
  const stop = () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", stop);
    document.body.classList.remove("resizing");
    save();
  };
  resizer.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    document.body.classList.add("resizing");
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
  });
  resizer.addEventListener("dblclick", () => { root.style.removeProperty("--sidebar"); save(); });
  for (const button of document.querySelectorAll("[data-nav-toggle]")) {
    button.addEventListener("click", () => { document.body.classList.toggle("nav-hidden"); save(); });
  }
}

// ---------- tree ----------

// Siblings with the same code and title are variants; label what differs.
function variant(node) {
  const twins = (node.parent ? node.parent.children : roots)
    .filter((s) => s !== node && s.visible && s.title === node.title && s.code === node.code);
  if (!twins.length) return "";
  const parts = [];
  const list = (mask, all, labels, none) => (mask === all ? none : names(mask, labels).join(", "));
  if (state.engine < 0 && twins.some((s) => s.e !== node.e)) parts.push(list(node.e, full(meta.engines), meta.engines, "all engines"));
  if (state.period < 0 && twins.some((s) => s.d !== node.d)) parts.push(list(node.d, full(meta.periods), meta.periods, "all periods"));
  if (twins.some((s) => s.o !== node.o)) parts.push(node.o ? optionNames(node.o).join(", ") : "standard");
  return parts.length ? label(parts.join(" · "), "variant", "small") : "";
}

function treeRow(node) {
  const active = state.current === node ? " active" : "";
  return `<a class="row${active} ${optionClass(node.o)}" href="#/${node.id}" aria-label="${esc(`${node.code} ${node.title}`.trim())}">` +
    (node.code ? label(node.code, "code") : "") +
    `<span class="title">${label(node.title)}${variant(node)}</span></a>`;
}

function treeItem(node) {
  const li = document.createElement("li");
  li.dataset.i = node.index;
  const kids = node.children.filter((c) => c.visible);
  const open = expanded.has(node.id);
  li.innerHTML = (kids.length
    ? `<button class="twisty" aria-expanded="${open}" aria-label="${open ? "Collapse" : "Expand"}"></button>`
    : `<span class="twisty leaf"></span>`) + treeRow(node);
  if (kids.length && open) li.append(treeList(kids));
  return li;
}

function treeList(list) {
  const ul = document.createElement("ul");
  for (const node of list) ul.append(treeItem(node));
  return ul;
}

function renderTree() {
  for (let n = state.current?.parent; n; n = n.parent) expanded.add(n.id);
  if (state.current?.children?.length) expanded.add(state.current.id);
  $("#tree").replaceChildren(treeList(roots.filter((n) => n.visible)));
  $("#tree .row.active")?.scrollIntoView({ block: "nearest" });
}

// ---------- pages ----------

function chips(node, inherited = { e: 0, d: 0, o: 0 }) {
  const out = [];
  const allE = full(meta.engines), allD = full(meta.periods);
  if (node.e !== allE && node.e !== inherited.e && state.engine < 0)
    out.push(`<span class="chip">${names(node.e, meta.engines).map(esc).join(" · ")}</span>`);
  if (node.d !== allD && node.d !== inherited.d && state.period < 0)
    out.push(`<span class="chip">${names(node.d, meta.periods).map(esc).join(" · ")}</span>`);
  if (node.o && node.o !== inherited.o)
    out.push(`<span class="chip opt ${optionClass(node.o)}" title="Valid for versions with">${optionNames(node.o).map(esc).join(" · ")}</span>`);
  return out.length ? `<div class="chips">${out.join("")}</div>` : "";
}

function content(node) {
  if (!contentCache.has(node.id)) {
    contentCache.set(node.id, node.blocks.length
      ? fetch(`data/t/${node.id}.json`).then((r) => r.json())
      : Promise.resolve([]));
  }
  return contentCache.get(node.id);
}

// ---------- procedure bodies ----------
// A procedure has a Removing part and a Refitting part. Each operation it calls is expanded where it is
// first called in that part; removing and refitting are tracked separately. An operation's own Removing and
// Refitting sections are both shown, and the one that is not current stays collapsed until opened.
// Refitting calls that the main Refitting list already contains are not expanded inside other operations,
// so the main list keeps the manual's refit order.

const phaseCache = new Map();

// Stored blocks, split into the Removing and Refitting parts. The part is followed across blocks in manual
// order, because one part can span several variant blocks. Cached without the engine filter; applied in phaseHtml.
function phaseBlocks(node) {
  if (!phaseCache.has(node.id)) {
    phaseCache.set(node.id, content(node).then((blocks) => {
      // No markers at all: a single-part operation (e.g. "Refer to ..."), which applies to both parts.
      const marked = blocks.some(([, , , html]) => /data-step="(removing|refitting)"/.test(html));
      let phase = "removal";
      return blocks.map(([e, d, o, html]) => {
        const root = document.createElement("div");
        root.innerHTML = html;
        const own = { removal: "", refit: "" };
        if (!marked) own.removal = own.refit = html;
        else for (const el of [...root.children]) {
          if (el.matches('h3[data-step="removing"]')) phase = "removal";
          else if (el.matches('h3[data-step="refitting"]')) phase = "refit";
          else if (!el.matches("a.jump")) own[phase] += el.outerHTML;
        }
        return { e, d, o, own, raw: html };
      });
    }));
  }
  return phaseCache.get(node.id);
}

// Removing / Refitting HTML for the selected engine and period.
async function phaseHtml(node) {
  const parts = { removal: "", refit: "", raw: "" };
  for (const { e, d, o, own, raw } of await phaseBlocks(node)) {
    parts.raw += raw;
    if (!fits(e, d)) continue;
    for (const key of ["removal", "refit"]) {
      if (own[key]) parts[key] += `<section class="block ${optionClass(o)}">${chips({ e, d, o }, node)}${own[key]}</section>`;
    }
  }
  return parts;
}

// A paragraph that holds only an "Op." link is a call to another procedure.
function opLinkId(p) {
  const links = p.querySelectorAll("a");
  const a = links[0];
  if (links.length !== 1 || p.textContent.trim() !== a.textContent.trim()) return null;
  const href = a.getAttribute("href") || "";
  return href.startsWith("#/") && a.textContent.trim().startsWith("Op.") ? href.slice(2) : null;
}

// Operation ids called directly in an HTML fragment (not inside an operation).
function directCalls(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return [...div.querySelectorAll("p")].filter((p) => !p.closest("td, th")).map(opLinkId).filter(Boolean);
}

function opTools(id) {
  return `<span class="op-tools"><a class="op-page" href="#/${id}" title="Open as page" aria-label="Open as page">&#8599;</a>` +
    `<a class="op-tab" href="#/${id}" title="Open in new tab" aria-label="Open in new tab">&#10697;</a></span>`;
}

function seenLine(id, title, label) {
  const p = document.createElement("p");
  p.className = "op-seen";
  p.innerHTML = `<span class="op-title">${title}</span>${opTools(id)}<small>already ${label} in this procedure</small>`;
  return p;
}

// Consecutive "already" lines become one collapsed line with a count.
function groupSeen(container) {
  let run = [];
  const flush = () => {
    if (run.length > 1) {
      const group = document.createElement("details");
      group.className = "seen-group";
      group.innerHTML = `<summary>${run.length} operations already listed in this procedure</summary>`;
      run[0].before(group);
      run.forEach((el) => group.append(el));
    }
    run = [];
  };
  for (const el of [...container.children]) {
    if (el.matches("p.op-seen")) run.push(el);
    else flush();
  }
  flush();
}

// One operation called from `ctx.phase`. Its current part is open; the other part loads when opened.
async function buildOp(target, title, ctx) {
  const parts = await phaseHtml(target);
  const details = document.createElement("details");
  details.className = "op";
  details.dataset.id = target.id;
  details.innerHTML = `<summary><span class="op-title">${title}</span><span class="op-phase">${ctx.phase === "removal" ? "removing" : "refitting"}</span>${opTools(target.id)}</summary><div class="op-body"></div>`;
  const body = details.querySelector(".op-body");
  for (const phase of ["removal", "refit"]) {
    if (!parts[phase]) continue;
    const section = document.createElement("details");
    section.className = `phase ${phase}`;
    section.open = phase === ctx.phase;
    section.innerHTML = `<summary>${phase === "removal" ? "Removing" : "Refitting"}</summary><div class="phase-body"></div>`;
    body.append(section);
    section._load = async () => {
      const slot = section.querySelector(".phase-body");
      if (slot.dataset.loaded) return;
      slot.dataset.loaded = "1";
      slot.innerHTML = parts[phase];
      await expandCalls(slot, phase, { ...ctx, phase, owner: target, depth: ctx.depth + 1 });
      fitFigures(slot);
    };
    if (section.open) await section._load();
  }
  return details;
}

// Expand the calls in one part of `container`, depth first.
async function expandCalls(container, phase, ctx) {
  const label = phase === "removal" ? "removing" : "refitting";
  for (const p of [...container.querySelectorAll("p")]) {
    if (p.closest("td, th")) continue;
    const id = opLinkId(p);
    const target = id && byId.get(id);
    if (!target || id === ctx.owner.id) continue;
    const title = esc(p.textContent.trim());
    const inMainRefit = phase === "refit" && ctx.depth > 0 && ctx.reserved.has(id);
    if (ctx.done[phase].has(id) || inMainRefit) {
      p.replaceWith(seenLine(id, title, label));
      continue;
    }
    ctx.done[phase].add(id);
    if (!target.visible) { p.remove(); continue; }  // not for the selected engine or period
    const parts = await phaseHtml(target);
    if (!parts[phase]) continue;
    p.replaceWith(await buildOp(target, title, { ...ctx, phase }));
  }
  groupSeen(container);
}

async function renderBody(container, node) {
  const parts = await phaseHtml(node);
  if (!/data-step="refitting"|<p><a href="#\/\d+">Op\./.test(parts.raw)) {
    const blocks = (await content(node)).filter(([e, d]) => fits(e, d));
    container.innerHTML = `<div class="content">${blocks.map(([e, d, o, body]) =>
      `<section class="block ${optionClass(o)}">${chips({ e, d, o }, node)}${body}</section>`).join("")}</div>`;
  } else {
    const holder = document.createElement("div");
    holder.className = "content";
    container.replaceChildren(holder);
    const shared = {
      done: { removal: new Set(), refit: new Set() },
      reserved: new Set(directCalls(parts.refit)),
      owner: node,
      depth: 0,
    };
    for (const phase of ["removal", "refit"]) {
      if (!parts[phase]) continue;
      const section = document.createElement("details");
      section.className = `phase ${phase}`;
      section.open = true;
      section.innerHTML = `<summary>${phase === "removal" ? "Removing" : "Refitting"}</summary><div class="phase-body">${parts[phase]}</div>`;
      holder.append(section);
      const slot = section.querySelector(".phase-body");
      await expandCalls(slot, phase, { ...shared, phase });
      fitFigures(slot);
    }
  }
  markLinks(container);
  fitFigures(container);
  const kids = node.children.filter((c) => c.visible);
  if (kids.length) container.append(childList(kids));
}

// Connector and wiring drawings: natural size, but never wider than the table below them.
function fitFigures(root) {
  for (const img of root.querySelectorAll("figure.diagram img")) {
    let next = img.closest("figure").nextElementSibling;
    while (next && !next.matches(".table, figure")) next = next.nextElementSibling;
    const width = next?.matches(".table") ? next.querySelector("table")?.offsetWidth : 0;
    img.style.maxWidth = width ? `${width}px` : "100%";
  }
}

// ---------- theme ----------

function applyTheme(mode) {
  if (mode === "system") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", mode);
}

function childList(kids) {
  const wrap = document.createElement("div");
  wrap.className = "children";
  const small = kids.length <= 6 && kids.every((k) => !k.children.some((c) => c.visible)) &&
    kids.reduce((sum, k) => sum + k.size, 0) <= 12000;
  const autoOpen = kids.length === 1 || small;
  wrap.innerHTML = (kids.length > 1
    ? `<div class="children-bar"><span>${kids.length} subtopics</span>
         <button class="link-button" data-expand="all">Expand all</button>
         <button class="link-button" data-expand="none">Collapse all</button></div>`
    : "") +
    kids.map((k) => {
      const sub = k.children.filter((c) => c.visible).length;
      return `<details class="sub ${optionClass(k.o)}" data-id="${k.id}"${autoOpen ? " open" : ""}>
        <summary>${k.code ? `<span class="code">${esc(k.code)}</span>` : ""}
          <span class="title">${esc(k.title)}${variant(k)}</span>
          ${sub ? `<span class="meta">${sub} subtopic${sub > 1 ? "s" : ""}</span>` : ""}
          <a class="open" href="#/${k.id}" title="Open as page" aria-label="Open ${esc(k.title)} as page">&#8599;</a>
        </summary>${chips(k, k.parent)}<div class="sub-body"></div></details>`;
    }).join("");
  return wrap;
}

function markLinks(root) {
  for (const a of root.querySelectorAll('a[href^="#/"]')) {
    const target = byId.get(a.getAttribute("href").slice(2));
    if (target && !target.visible) {
      a.classList.add("unavailable");
      a.title = "Not available for the selected engine / production period";
    }
  }
}

function breadcrumbs(node) {
  const trail = [];
  for (let n = node.parent; n; n = n.parent) trail.unshift(n);
  return `<nav class="crumbs">${trail.map((n) =>
    `<a href="#/${n.id}">${n.code ? esc(n.code) + " " : ""}${esc(n.title)}</a>`).join("<span>/</span>")}</nav>`;
}

function renderPage() {
  const page = $("#page");
  const node = state.current;
  if (!node) return renderHome(page);
  if (typeof node === "string") {
    page.innerHTML = `<h1>Topic not found</h1><p><a href="#/">Back to contents</a></p>`;
    return;
  }
  document.title = `${node.code ? node.code + " " : ""}${node.title} · ${meta.model}`;
  const header = `${breadcrumbs(node)}<h1>${node.code ? `<span class="code">${esc(node.code)}</span>` : ""}${esc(node.title)}</h1>${chips(node)}` +
    `<p class="text-version"><a href="ai/t/${node.id}.html">Text version (for AI tools and screen readers)</a></p>`;
  if (!node.visible) {
    page.innerHTML = `${header}<div class="notice"><p>This topic is not available for the selected
      engine or production period.</p><button id="reset" class="button">Show all engines and periods</button></div>`;
    $("#reset").onclick = () => { state.engine = state.period = -1; $("#engine").value = $("#period").value = -1; refresh(); };
    return;
  }
  page.innerHTML = `${header}<div class="body"></div>`;
  renderBody($(".body", page), node).then(() => page.focus({ preventScroll: true }));
  page.scrollTo?.(0, 0);
  window.scrollTo(0, 0);
}

function renderHome(page) {
  document.title = `${meta.model} workshop manual`;
  const count = (n) => (n.visible ? 1 : 0) + n.children.reduce((s, c) => s + count(c), 0);
  page.innerHTML = `<h1>${esc(meta.model)} workshop manual</h1>
    <p class="lead">Choose an engine and production period in the sidebar to show only what applies to your car.
      Equipment options stay visible and are highlighted.</p>
    <div class="cards">${roots.filter((n) => n.visible).map((n) =>
      `<a class="card" href="#/${n.id}"><strong>${esc(n.title)}</strong><span>${count(n) - 1} topics</span></a>`).join("")}</div>
    <p class="disclaimer">${esc(meta.disclaimer)}</p>`;
}

// ---------- search ----------

async function runSearch() {
  const query = $("#search").value.trim().toLowerCase();
  const results = $("#results");
  results.hidden = !query;
  $("#tree").hidden = Boolean(query);
  if (!query) return;
  const terms = query.split(/\s+/);
  const matches = (text) => terms.every((t) => text.includes(t));
  if (searchScope() === "titles") {
    results.innerHTML = resultList(nodes.filter((n) => n.visible && matches(`${n.code} ${n.title}`.toLowerCase())));
    return;
  }
  if (!searchText) {
    results.innerHTML = resultList([], "Loading text…");
    searchText = (await (await fetch("data/search.json")).json()).map((t) => t.toLowerCase());
    if ($("#search").value.trim().toLowerCase() !== query || searchScope() !== "text") return;
  }
  results.innerHTML = resultList(nodes.filter((n) => n.visible && matches(searchText[n.index])), "", terms[0]);
}

const searchScope = () => $('input[name="scope"]:checked').value;

function bindSearchScope() {
  const placeholder = { titles: "Search chapter code or title", text: "Search text inside topics" };
  const apply = () => { $("#search").placeholder = placeholder[searchScope()]; runSearch(); };
  const saved = store.get("scope");
  if (saved) $(`input[name="scope"][value="${saved}"]`).checked = true;
  $("#scope").addEventListener("change", () => { store.set("scope", searchScope()); apply(); $("#search").focus(); });
  apply();
}

function resultList(list, note, term) {
  if (!list.length && !note) return label("No results", "hint", "p");
  const section = (n) => { while (n.parent) n = n.parent; return n.title; };
  return label(note || `${list.length} result${list.length === 1 ? "" : "s"}${list.length > 200 ? " (first 200 shown)" : ""}`, "hint", "p") + "<ul>" +
    list.slice(0, 200).map((n) => {
      let snippet = "";
      const at = term && searchText ? searchText[n.index].indexOf(term) : -1;
      if (at >= 0 && !`${n.code} ${n.title}`.toLowerCase().includes(term))
        snippet = label(`…${searchText[n.index].slice(Math.max(0, at - 40), at + 60)}…`, "", "small");
      return `<li><a href="#/${n.id}" class="${optionClass(n.o)}">${n.code ? label(n.code, "code") : ""}${label(n.title)}${variant(n)}
        ${label(section(n), "", "em")}${snippet}</a></li>`;
    }).join("") + "</ul>";
}

// ---------- image viewer (zoom & pan) ----------

const view = { scale: 1, x: 0, y: 0, pointers: new Map(), pinch: 0 };

function openViewer(img) {
  const viewer = $("#viewer");
  const target = $("#viewer-img");
  $("#viewer-title").textContent = img.alt || "";
  $("#viewer-open").href = img.src;
  target.onload = () => zoom("fit");
  target.src = img.src;
  viewer.hidden = false;
  document.body.classList.add("viewing");
  if (target.complete) zoom("fit");
}

function apply() {
  $("#viewer-img").style.transform = `translate(${view.x}px, ${view.y}px) scale(${view.scale})`;
}

function zoomAt(factor, cx, cy) {
  const scale = Math.min(40, Math.max(0.05, view.scale * factor));
  factor = scale / view.scale;
  view.x = cx - (cx - view.x) * factor;
  view.y = cy - (cy - view.y) * factor;
  view.scale = scale;
  apply();
}

function zoom(action) {
  const stage = $("#stage").getBoundingClientRect();
  const img = $("#viewer-img");
  if (action === "close") {
    $("#viewer").hidden = true;
    document.body.classList.remove("viewing");
    img.removeAttribute("src");
  } else if (action === "fit") {
    const w = img.naturalWidth || 1000, h = img.naturalHeight || 700;
    view.scale = Math.min(stage.width / w, stage.height / h) * 0.96;
    view.x = (stage.width - w * view.scale) / 2;
    view.y = (stage.height - h * view.scale) / 2;
    apply();
  } else {
    zoomAt(action === "in" ? 1.4 : 1 / 1.4, stage.width / 2, stage.height / 2);
  }
}

function bindViewer() {
  const stage = $("#stage");
  $("#viewer").addEventListener("click", (e) => { if (e.target.dataset.zoom) zoom(e.target.dataset.zoom); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("#viewer").hidden) zoom("close"); });
  stage.addEventListener("wheel", (e) => {
    e.preventDefault();
    const box = stage.getBoundingClientRect();
    zoomAt(Math.exp(-e.deltaY * 0.0015), e.clientX - box.left, e.clientY - box.top);
  }, { passive: false });
  stage.addEventListener("dblclick", () => zoom("fit"));
  stage.addEventListener("pointerdown", (e) => {
    stage.setPointerCapture(e.pointerId);
    view.pointers.set(e.pointerId, [e.clientX, e.clientY]);
  });
  stage.addEventListener("pointermove", (e) => {
    const last = view.pointers.get(e.pointerId);
    if (!last) return;
    view.pointers.set(e.pointerId, [e.clientX, e.clientY]);
    if (view.pointers.size === 2) {
      const [a, b] = [...view.pointers.values()];
      const dist = Math.hypot(a[0] - b[0], a[1] - b[1]);
      const box = stage.getBoundingClientRect();
      if (view.pinch) zoomAt(dist / view.pinch, (a[0] + b[0]) / 2 - box.left, (a[1] + b[1]) / 2 - box.top);
      view.pinch = dist;
    } else {
      view.x += e.clientX - last[0];
      view.y += e.clientY - last[1];
      apply();
    }
  });
  const release = (e) => { view.pointers.delete(e.pointerId); view.pinch = 0; };
  stage.addEventListener("pointerup", release);
  stage.addEventListener("pointercancel", release);
}

init();
