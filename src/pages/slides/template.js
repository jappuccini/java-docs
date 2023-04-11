import React from 'react';
import Slides from '../../components/Slides';
import { defaultInitSlides } from '../../components/Slides/initSlides';

export default function TemplatePresentation() {
  return (
    <Slides initSlides={defaultInitSlides}>
      <section>Slide 1</section>
      <section>
        <section>Vertical Slide 1</section>
        <section>Vertical Slide 2</section>
      </section>
      <section>Slide 3</section>
    </Slides>
  );
}
