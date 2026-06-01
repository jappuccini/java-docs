export const defaultInitSlides = () => {
  const Zoom = require('reveal.js/plugin/zoom');
  const Notes = require('reveal.js/plugin/notes');
  const Search = require('reveal.js/plugin/search');
  const Highlight = require('reveal.js/plugin/highlight');
  const Reveal = require('reveal.js');
  new Reveal({
    plugins: [Zoom, Notes, Search, Highlight],
  }).initialize({ hash: true });
};
