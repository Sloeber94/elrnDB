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
const optionClass = (mask) => (!mask || !state.options ? "" : (mask & state.options) === mask ? "match" : "other");

async function init() {
  meta = await (await fetch("data/tree.json")).json();
  nodes = meta.nodes.map(([id, parent, code, title, e, d, o, blocks, size], index) =>
    ({ id, index, parent: null, parentIndex: parent, code, title, e, d, o, blocks, size, children: [] }));
  for (const node of nodes) {
    byId.set(node.id, node);
    if (node.parentIndex < 0) roots.push(node);
    else { node.parent = nodes[node.parentIndex]; node.parent.children.push(node); }
    node.section = node.parent ? node.parent.section : node.title;
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
    expanded.clear();  // only the path to the topic you went to stays open
    // Navigating to a topic opens the branch that leads to it, even where the user had collapsed it.
    for (let n = state.current?.parent; n; n = n.parent) userCollapsed.delete(n.id);
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
  $("#expand-all").addEventListener("click", () => {
    for (const n of nodes) if (n.children.some((c) => c.visible)) { expanded.add(n.id); userCollapsed.delete(n.id); }
    renderTree();
  });
  $("#collapse-all").addEventListener("click", () => {
    expanded.clear();
    for (const n of nodes) if (n.children.length) userCollapsed.add(n.id);
    renderTree();
  });
  let resizeTimer;
  window.addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => fitFigures($("#page")), 150); });

  $("#tree").addEventListener("click", (e) => {
    const li = e.target.closest("li[data-i]");
    if (!li) return;
    const node = nodes[li.dataset.i];
    if (!node.children.some((c) => c.visible)) return;
    if (e.target.closest(".twisty")) {
      setExpanded(node, !expanded.has(node.id));
      li.replaceWith(treeItem(node));
    } else if (e.target.closest("a.row")) {
      setExpanded(node, !expanded.has(node.id));  // the link still navigates
      setTimeout(renderTree, 0);                  // redraw now too, in case the link points to the current topic
    }
  });

  let timer;
  $("#search").addEventListener("input", () => { clearTimeout(timer); timer = setTimeout(runSearch, 150); });
  $("#search").addEventListener("keydown", (e) => {
    if (e.key === "Enter") $("#results a")?.click();
    if (e.key === "Escape") { e.target.value = ""; runSearch(); }
  });

  $("#page").addEventListener("click", (e) => {
    const opTool = e.target.closest(".op-tools a");
    if (opTool) {  // navigate or open a new tab; do not toggle the dropdown
      e.preventDefault();
      e.stopPropagation();
      if (opTool.classList.contains("op-tab")) window.open(opTool.getAttribute("href"), "_blank", "noopener");
      else location.hash = opTool.getAttribute("href");
      return;
    }
    const img = e.target.closest("img.zoomable");
    if (img?.dataset.dragged) { delete img.dataset.dragged; return; }  // end of a resize drag, not a click
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
      renderTopic($(".sub-body", details), byId.get(details.dataset.id), topContext());
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

// Topics the user collapsed stay collapsed when the tree is redrawn; ancestors of the current topic stay open.
const userCollapsed = new Set();
function setExpanded(node, open) {
  if (open) { expanded.add(node.id); userCollapsed.delete(node.id); }
  else { expanded.delete(node.id); userCollapsed.add(node.id); }
}

function renderTree() {
  for (let n = state.current?.parent; n; n = n.parent) if (!userCollapsed.has(n.id)) expanded.add(n.id);
  if (state.current?.children?.length && !userCollapsed.has(state.current.id)) expanded.add(state.current.id);
  const list = treeList(roots.filter((n) => n.visible));
  const home = document.createElement("li");
  home.innerHTML = `<span class="twisty leaf"></span><a class="row${state.current ? "" : " active"}" href="#/" aria-label="Home">` +
    `<span class="title">${label("Home")}</span></a>`;
  list.prepend(home);
  $("#tree").replaceChildren(list);
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

// ---------- topic bodies ----------
// One renderer for pages, subtopics and called procedures, built on three rules found in the data:
//  1. Parts: a block may start with a part marker (Removing or Refitting; always its first element).
//     An unmarked block continues the part of the block before it; blocks before the first marker
//     belong to no part. Repeated Removing/Refitting units in one topic are variants (engines, bodies).
//  2. Calls: every link to a Procedures topic ("Op. …") is a call to that procedure, wherever it stands:
//     on its own line, inside a sentence or in a table cell.
//  3. Applicability: every block has its own engine and period masks.
// A topic shows its unpartitioned blocks first, then a Removing and a Refitting section for the parts its
// visible blocks have. Calls are expanded in place, in the part they occur in. Inside a part, a call is
// shown as a one-line reference instead when, for a car that could need both, the same procedure was already
// expanded earlier in that part, or an enclosing procedure lists it itself in that part (it does it there,
// in its own order). A call that would loop is always a reference.

const PARTS = { removing: "removal", refitting: "refit" };
const PART_LABEL = { removal: "Removing", refit: "Refitting" };
const PART_DONE = { none: "listed", removal: "removed", refit: "refitted" };
const parsedCache = new Map();

// Blocks of a topic with their part, cached independently of the filters.
function parsedBlocks(node) {
  if (!parsedCache.has(node.id)) {
    parsedCache.set(node.id, content(node).then((blocks) => {
      let part = "none";
      return blocks.map(([e, d, o, html]) => {
        const root = document.createElement("div");
        root.innerHTML = html;
        const marker = root.firstElementChild;
        if (marker?.matches("h3.step") && PARTS[marker.dataset.step]) {
          part = PARTS[marker.dataset.step];
          for (const el of root.querySelectorAll(":scope > h3.step, :scope > a.jump")) el.remove();
        }
        return { e, d, o, part, html: root.innerHTML };
      });
    }));
  }
  return parsedCache.get(node.id);
}

// The procedure a link calls, or null.
function callTarget(a) {
  const target = byId.get(a.getAttribute("href").slice(2));
  return target?.section === "Procedures" ? target : null;
}

function callsIn(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return [...div.querySelectorAll('a[href^="#/"]')].map(callTarget).filter(Boolean);
}

// Fresh context for a page or a subtopic: no calling part, the selected filters, nothing expanded yet.
function topContext() {
  return { part: null, e: engineMask(), d: periodMask(), chain: [], seen: { none: [], removal: [], refit: [] } };
}

async function renderTopic(container, node, ctx) {
  const blocks = (await parsedBlocks(node)).filter((b) => fits(b.e, b.d));
  const partOf = (b) => (b.part === "none" ? ctx.part || "none" : b.part);  // unpartitioned blocks run in the caller's part
  const masksOf = (b) => ({ e: ctx.e & b.e, d: ctx.d & b.d });
  const frame = { node, calls: { none: [], removal: [], refit: [] } };
  for (const b of blocks) for (const t of callsIn(b.html)) frame.calls[partOf(b)].push({ id: t.id, ...masksOf(b) });
  const inner = { ...ctx, chain: [...ctx.chain, frame] };

  const holder = document.createElement("div");
  holder.className = "content";
  container.replaceChildren(holder);
  const renderBlocks = async (target, list) => {
    for (const b of list) {
      const section = document.createElement("section");
      section.className = "block";
      section.innerHTML = chips(b, node) + b.html;
      target.append(section);
      await expandCalls(section, partOf(b), masksOf(b), inner);
    }
    fitFigures(target);
  };

  await renderBlocks(holder, blocks.filter((b) => b.part === "none"));
  for (const part of ["removal", "refit"]) {
    const list = blocks.filter((b) => b.part === part);
    if (!list.length) continue;
    const section = document.createElement("details");
    section.className = `phase ${part}`;
    section.innerHTML = `<summary>${PART_LABEL[part]}</summary><div class="phase-body"></div>`;
    holder.append(section);
    section._load = () => { section._load = null; return renderBlocks(section.querySelector(".phase-body"), list); };
    section.open = !ctx.part || ctx.part === part;  // a page shows both parts; a call opens the part it is called for
    if (section.open) await section._load();
  }
  markLinks(container);
  const kids = node.children.filter((c) => c.visible);
  if (kids.length) container.append(childList(kids));
}

async function expandCalls(element, part, masks, ctx) {
  const same = (id) => (x) => x.id === id && (x.e & masks.e) && (x.d & masks.d);
  for (const a of [...element.querySelectorAll('a[href^="#/"]')]) {
    const target = callTarget(a);
    if (!target) continue;
    // A link that fills its paragraph is replaced with the paragraph. A link inside a sentence or a table
    // cell is replaced on its own; its paragraph becomes a block so the dropdown can sit inside it.
    const host = a.parentElement;
    const alone = host.matches("p") && host.textContent.trim() === a.textContent.trim();
    const spot = alone ? host : a;
    if (!alone && host.matches("p")) {
      const block = document.createElement("div");
      block.className = "para";
      block.append(...host.childNodes);
      host.replaceWith(block);
    }
    if (!target.visible) { if (alone) spot.remove(); continue; }  // not for this car; an inline link stays, struck through
    const title = esc(a.textContent.trim());
    // Removing or refitting something twice is meaningless, so repeats are folded inside a part. Outside a
    // part a repeated call is usually the reverse action (disconnect, later reconnect), so it stays.
    const repeat = ctx.chain.some((f) => f.node === target)
      || (part !== "none" && (ctx.seen[part].some(same(target.id))
        || ctx.chain.slice(0, -1).some((f) => f.calls[part].some(same(target.id)))));
    if (repeat) { spot.replaceWith(seenLine(target.id, title, part)); continue; }
    ctx.seen[part].push({ id: target.id, ...masks });
    spot.replaceWith(await callElement(target, title, part, masks, ctx));
  }
  groupSeen(element);
}

async function callElement(target, title, part, masks, ctx) {
  const details = document.createElement("details");
  details.className = "op";
  details.dataset.id = target.id;
  const chip = part === "none" ? "" : `<span class="op-phase">${part === "removal" ? "removing" : "refitting"}</span>`;
  details.innerHTML = `<summary><span class="op-title">${title}</span>${chip}${opTools(target.id)}</summary><div class="op-body"></div>`;
  const load = () => renderTopic(details.querySelector(".op-body"), target, { ...ctx, part, ...masks });
  // Inside a part, repeats are folded in reading order, so the call is expanded now. Outside a part nothing
  // is folded, so it loads when first opened (pages with many calls, such as component tables, stay fast).
  if (part === "none") details._load = () => { details._load = null; return load(); };
  else await load();
  return details;
}

function opTools(id) {
  return `<span class="op-tools"><a class="op-page" href="#/${id}" title="Open as page" aria-label="Open as page">&#8599;</a>` +
    `<a class="op-tab" href="#/${id}" title="Open in new tab" aria-label="Open in new tab">&#10697;</a></span>`;
}

function seenLine(id, title, part) {
  const p = document.createElement("p");
  p.className = "op-seen";
  p.innerHTML = `<span class="op-title">${title}</span>${opTools(id)}<small>already ${PART_DONE[part]} in this procedure</small>`;
  return p;
}

// Consecutive references become one collapsed line with a count.
function groupSeen(container) {
  let run = [];
  const flush = () => {
    if (run.length > 1) {
      const group = document.createElement("details");
      group.className = "seen-group";
      group.innerHTML = `<summary>${run.length} operations already in this procedure</summary>`;
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

// ---------- images ----------
// Diagrams are as wide as the table below them; drag an image to resize it (kept until the viewer closes).
const figureWidths = new Map();

function fitFigures(root) {
  for (const img of root.querySelectorAll("figure img.zoomable")) {
    const figure = img.closest("figure");
    const src = img.getAttribute("src");
    if (!img.dataset.resizable) {
      img.dataset.resizable = "1";
      img.draggable = false;  // otherwise the browser starts a native image drag and the resize stops
      img.addEventListener("pointerdown", (ev) => startResize(ev, img, src));
    }
    let next = figure.nextElementSibling;
    while (next && !next.matches(".table, figure")) next = next.nextElementSibling;
    const tableWidth = figure.classList.contains("diagram") && next?.matches(".table") ? next.querySelector("table")?.offsetWidth : 0;
    const width = figureWidths.get(src) || tableWidth;
    img.style.width = width ? `${width}px` : "";
    img.style.maxHeight = figureWidths.has(src) ? "none" : "";
  }
}

// Drag anywhere on an image to resize it. A click without movement still opens the viewer.
function startResize(ev, img, src) {
  if (ev.button !== 0) return;
  delete img.dataset.dragged;
  const startX = ev.clientX;
  const startWidth = img.getBoundingClientRect().width;
  let moved = false;
  const move = (e) => {
    if (!moved && Math.abs(e.clientX - startX) < 5) return;
    moved = true;
    const width = Math.max(120, Math.round(startWidth + e.clientX - startX));
    figureWidths.set(src, width);
    img.style.width = `${width}px`;
    img.style.maxHeight = "none";
  };
  const up = () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", up);
    if (moved) img.dataset.dragged = "1";
  };
  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", up);
}

// ---------- theme ----------

function applyTheme(mode) {
  if (mode === "system") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", mode);
}

function childList(kids) {
  const wrap = document.createElement("div");
  wrap.className = "children";
  wrap.innerHTML = (kids.length > 1
    ? `<div class="children-bar"><span>${kids.length} subtopics</span>
         <button class="link-button" data-expand="all">Expand all</button>
         <button class="link-button" data-expand="none">Collapse all</button></div>`
    : "") + kids.map((k) => topicDropdown(k)).join("");
  return wrap;
}

// A topic as a closed dropdown that loads its content when opened. `caption` replaces the title (the
// manual's title is then shown as a note).
function topicDropdown(k, caption = "") {
  const sub = k.children.filter((c) => c.visible).length;
  const name = `${k.code ? k.code + " " : ""}${k.title}`;
  return `<details class="sub ${optionClass(k.o)}" data-id="${k.id}">
    <summary>${!caption && k.code ? `<span class="code">${esc(k.code)}</span>` : ""}
      <span class="title">${esc(caption || k.title)}${caption ? ` <small class="meta">${esc(name)}</small>` : variant(k)}</span>
      ${sub ? `<span class="meta">${sub} subtopic${sub > 1 ? "s" : ""}</span>` : ""}
      <a class="open" href="#/${k.id}" title="Open as page" aria-label="Open ${esc(k.title)} as page">&#8599;</a>
    </summary>${chips(k, k.parent)}<div class="sub-body"></div></details>`;
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
  renderTopic($(".body", page), node, topContext()).then(() => page.focus({ preventScroll: true }));
  page.scrollTo?.(0, 0);
  window.scrollTo(0, 0);
}

// Reference topics for the home page, found by section and title (so variants and filters apply).
const REFERENCE = [
  ["Fuses, relays and junction units", "Descriptions", /^INSTRUMENT\/GAUGE ELECTRICAL CIRCUITS$/],
  ["Wire colour codes", "Electrical equipment", /^KEY$/],
  ["Tightening torques", "Technical Data", /^TIGHTENING TORQUES$/],
  ["Fluids and products", "Technical Data", /^PRODUCTS$/],
  ["Special tools", "Technical Data", /^SPECIFIC TOOLING$/],
  ["Identification, engine codes and general features", "Technical Data", /^CAR GENERAL FEATURES$/],
  ["Programmed maintenance plan", null, /^PROGRAMMED MAINTENANCE PLAN$/],
  ["Before you start: safety and battery disconnection", "Procedures", /^INTRODUCTION - MAINTENANCE$/],
];

// Most-referenced topics per section, ranked at build time (tree.json "popular").
const POPULAR = [
  ["Most used procedures", "Procedures"],
  ["Most connected components and harnesses", "Electrical equipment"],
  ["Most used checks", "Test"],
];

function renderHome(page) {
  document.title = `${meta.model} workshop manual`;
  const count = (n) => (n.visible ? 1 : 0) + n.children.reduce((s, c) => s + count(c), 0);
  const group = (title, items) => items.length
    ? `<details class="phase" open><summary>${esc(title)}</summary><div class="children">${items.join("")}</div></details>` : "";
  const reference = REFERENCE.map(([caption, section, title]) => {
    const node = nodes.find((n) => n.visible && (!section || n.section === section) && title.test(n.title));
    return node ? topicDropdown(node, caption) : "";
  }).filter(Boolean);
  const popular = POPULAR.map(([title, section]) =>
    group(title, (meta.popular?.[section] || []).map((id) => byId.get(id)).filter((n) => n?.visible).map((n) => topicDropdown(n))));
  page.innerHTML = `<h1>${esc(meta.model)} workshop manual</h1>
    <p class="lead">The complete workshop manual, filtered for your car. Pick your engine and production period in the
      sidebar, and tick your equipment to highlight what applies to it.</p>
    <details class="phase" open><summary>What this site does</summary><ul class="features">
      <li><strong>Shows only what applies to your car:</strong> engine and production period hide every other variant.</li>
      <li><strong>Procedures in order:</strong> Removing and Refitting, with every operation they call nested in place, each once.</li>
      <li><strong>Wiring:</strong> connector pinouts with decoded wire colours, wiring diagrams and component locations.
        Click a picture to zoom; drag it to resize.</li>
      <li><strong>Fault diagnosis and tests</strong> as step tables, plus torques, specifications, products and tools.</li>
      <li><strong>Search</strong> by chapter code and title, or through the full text.</li>
      <li><strong>For AI assistants:</strong> a text version of the whole manual, starting at <a href="llms.txt">llms.txt</a>.</li>
    </ul></details>
    ${group("Reference", reference)}
    ${popular.join("")}
    <details class="phase" open><summary>Sections</summary><div class="cards">${roots.filter((n) => n.visible).map((n) =>
      `<a class="card" href="#/${n.id}"><strong>${esc(n.title)}</strong><span>${count(n) - 1} topics</span></a>`).join("")}</div></details>
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

let viewedSrc = null;

function openViewer(img) {
  const viewer = $("#viewer");
  const target = $("#viewer-img");
  viewedSrc = img.getAttribute("src");
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
    if (viewedSrc) { figureWidths.delete(viewedSrc); fitFigures($("#page")); }  // back to the starting size
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
