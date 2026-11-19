import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight';
import type { RevealApi } from 'reveal.js';

/**
 * Write the current topic group's `data-topic` into the chrome breadcrumb.
 * Groups without a `data-topic` (cover, agenda, unmigrated decks) leave the
 * group span empty, which hides the separator via CSS.
 */
const updateChrome = (deck: RevealApi) => {
  const topic = document.querySelector('.slide-chrome__topic');
  if (!topic) {
    return;
  }

  let group: HTMLElement | null = deck.getCurrentSlide();
  while (
    group &&
    group.parentElement &&
    !group.parentElement.classList.contains('slides')
  ) {
    group = group.parentElement;
  }

  topic.textContent = group?.dataset.topic ?? '';
};

export const defaultInitSlides = () => {
  const deck = new Reveal({
    plugins: [Highlight],
    width: 1280,
    height: 720,
    margin: 0,
    hash: true,
    progress: true,
    slideNumber: 'c/t',
    controls: true,
    controlsTutorial: false,
  });
  deck.on('ready', () => updateChrome(deck));
  deck.on('slidechanged', () => updateChrome(deck));
  deck.initialize();
  return deck;
};
