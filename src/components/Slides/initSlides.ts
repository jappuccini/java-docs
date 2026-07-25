import Reveal from 'reveal.js';
import Notes from 'reveal.js/plugin/notes';
import Search from 'reveal.js/plugin/search';
import Highlight from 'reveal.js/plugin/highlight';

export const defaultInitSlides = () => {
  const deck = new Reveal({
    plugins: [Notes, Search, Highlight],
  });
  deck.initialize({ hash: true });
  return deck;
};
