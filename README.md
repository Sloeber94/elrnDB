# eLearn workshop manuals: Alfa Romeo, Fiat, Lancia

**Open the site: https://sloeber94.github.io/elrnDB/**, then pick a model.

| Brand | Models |
|---|---|
| Alfa Romeo | [147](https://sloeber94.github.io/elrnDB-a147/en/), [159](https://sloeber94.github.io/elrnDB/alfa/159/en/), [Brera](https://sloeber94.github.io/elrnDB-aBrr/en/), [GT](https://sloeber94.github.io/elrnDB-aGt/en/) |
| Fiat | [Doblò](https://sloeber94.github.io/elrnDB-fDbl/en/), [Multipla](https://sloeber94.github.io/elrnDB-fMltpl/en/), [Panda](https://sloeber94.github.io/elrnDB-fPnd/en/), [Ulysse](https://sloeber94.github.io/elrnDB-fUlss/en/) |
| Lancia | [Thesis](https://sloeber94.github.io/elrnDB-lThss/en/), [Ypsilon](https://sloeber94.github.io/elrnDB-lYpsln/en/) |

**For AI assistants (ChatGPT, Claude, Perplexity, Gemini, …):** paste this link into the chat:
**https://sloeber94.github.io/elrnDB/llms.txt**

It lists every model's own `llms.txt`, the entry point to a plain-text version of that model's manual:
every topic is its own page with its path, the vehicles it applies to, and links to and from related
topics (wiring, connectors, components, procedures). For one model, paste its link directly, for example
https://sloeber94.github.io/elrnDB/alfa/159/en/llms.txt. Start with the model's guide at `ai/guide.html` if
the assistant asks where to begin. Old Alfa 159 links (`…/elrnDB/ai/…`) still work and forward to the new
addresses. Each model other than the 159 is its own repository (`elrnDB-<short name>`), because a GitHub Pages site may be at most 1 GB; models whose site is not published yet are marked "coming soon" on the start page.

Searchable, filterable web versions of the eLearn workshop manuals (English, all engines and variants),
hosted by GitHub Pages from the `docs/` folder.

## Using the interactive site

- **Engine** and **production period** filters (sidebar) hide everything that does not apply.
- **Highlight equipment** marks topics that depend on options (Station Wagon, 4x4, sunroof, …):
  green when it matches your car, grey for other equipment. Nothing is hidden by options.
- **Search** in the sidebar: *Chapters* searches codes and titles, *Content* searches the text
  inside topics. The browser's own find (Ctrl+F) searches only the open page.
- Subtopics open inline (▸) or as their own page (↗). Small groups open automatically.
- Click any picture or wiring diagram to zoom and pan.
- Drag the sidebar edge to resize it (double-click resets), or hide it with «.
- Filters and the current topic are kept in the URL, so links are shareable. Each model keeps its own filters.
- "← All models" returns to the start page.
- Each topic has a "Text version" link for AI tools and screen readers.

To view it offline: `python -m http.server 8000 --directory docs`, then open http://localhost:8000.
