import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { type ReactNode, useEffect } from 'react';
import type { RevealApi } from 'reveal.js';

interface SlidesProps {
  children: ReactNode;
  width?: string | null;
  height?: string | null;
}

function SlidesInner({
  children,
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
      <div className="slides">{children}</div>
    </div>
  );
}

export default function Slides({
  children,
  width = null,
  height = null,
}: SlidesProps): React.JSX.Element {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => (
        <SlidesInner width={width} height={height}>
          {children}
        </SlidesInner>
      )}
    </BrowserOnly>
  );
}
