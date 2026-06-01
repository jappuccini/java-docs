import Slides from '../../components/Slides';

export default function TemplatePresentation(): React.JSX.Element {
  return (
    <Slides>
      <section>Slide 1</section>
      <section>
        <section>Vertical Slide 1</section>
        <section>Vertical Slide 2</section>
      </section>
      <section>Slide 3</section>
    </Slides>
  );
}
