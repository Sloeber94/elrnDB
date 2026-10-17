# Alfa 159 workshop manual

**Open the site: https://sloeber94.github.io/elrnDB/**

A searchable, filterable web version of the eLearn workshop manual (English),
hosted by GitHub Pages from the `docs/` folder.

## Using it

- **Engine** and **production period** filters (sidebar) hide everything that does not apply.
- **Highlight equipment** marks topics that depend on options (Station Wagon, 4x4, sunroof, …):
  green when it matches your car, grey for other equipment. Nothing is hidden by options.
- **Search** in the sidebar: *Chapters* searches codes and titles, *Content* searches the text
  inside topics. The browser's own find (Ctrl+F) searches only the open page.
- Subtopics open inline (▸) or as their own page (↗). Small groups open automatically.
- Click any picture or wiring diagram to zoom and pan.
- Drag the sidebar edge to resize it (double-click resets), or hide it with «.
- Filters and the current topic are kept in the URL, so links are shareable.

To view it offline: `python -m http.server 8000 --directory docs`, then open http://localhost:8000.
