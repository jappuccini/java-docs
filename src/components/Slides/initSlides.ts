import Reveal from 'reveal.js';
import Zoom from 'reveal.js/plugin/zoom';
import Notes from 'reveal.js/plugin/notes';
import Search from 'reveal.js/plugin/search';
import Highlight from 'reveal.js/plugin/highlight';

export const defaultInitSlides = () => {
  new Reveal({
    plugins: [Zoom, Notes, Search, Highlight],
  }).initialize({ hash: true });
};
