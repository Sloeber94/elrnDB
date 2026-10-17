# Alfa 159 workshop manual

A searchable, filterable web version of the eLearn workshop manual (English).
The site is in `docs/` and is served by GitHub Pages. To view it locally:

```
python -m http.server 8000 --directory docs
```

## Using it

- **Engine** and **production period** filters (sidebar) hide everything that does not apply.
- **Highlight equipment** marks topics that depend on options (Station Wagon, 4x4, sunroof, …):
  green when it matches your car, grey for other equipment. Nothing is hidden by options.
- Subtopics open inline (▸) or as their own page (↗). Small groups open automatically.
- Click any picture or wiring diagram to zoom and pan.
- Drag the sidebar edge to resize it (double-click resets), or hide it with «.
- Filters and the current topic are kept in the URL, so links are shareable.
