import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { type ReactNode, useEffect } from 'react';
import type { RevealApi } from 'reveal.js';

interface SlidesProps {
  children: ReactNode;
  title?: string;
  width?: string | null;
  height?: string | null;
}

function SlidesInner({
  children,
  title,
  width,
  height,
}: SlidesProps): React.JSX.Element {
  useEffect(() => {
    let disposed = false;
    let deck: RevealApi | undefined;

    import('./initSlides').then(({ defaultInitSlides }) => {
      if (!disposed) {
        deck = defaultInitSlides();
      }
    });

    return () => {
      disposed = true;
      deck?.destroy();
    };
  }, []);

  return (
    <div
      className="reveal reveal-viewport"
      style={{ width: width ?? '100vw', height: height ?? '100vh' }}
    >
      {title && (
        <div className="slide-chrome" aria-hidden="true">
          <div className="slide-chrome__inner">
            <span className="slide-chrome__deck">{title}</span>
            <span className="slide-chrome__topic" />
          </div>
        </div>
      )}
      <div className="slides">{children}</div>
    </div>
  );
}

export default function Slides({
  children,
  title,
  width = null,
  height = null,
}: SlidesProps): React.JSX.Element {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => (
        <SlidesInner title={title} width={width} height={height}>
          {children}
        </SlidesInner>
      )}
    </BrowserOnly>
  );
}
