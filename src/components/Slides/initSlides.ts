export const defaultInitSlides = () => {
  const Zoom = require('reveal.js/plugin/zoom/zoom.js');
  const Notes = require('reveal.js/plugin/notes/notes.js');
  const Search = require('reveal.js/plugin/search/search.js');
  const Highlight = require('reveal.js/plugin/highlight/highlight.js');
  const Reveal = require('reveal.js/dist/reveal.js');
  new Reveal({
    plugins: [Zoom, Notes, Search, Highlight],
  }).initialize({ hash: true });
};
