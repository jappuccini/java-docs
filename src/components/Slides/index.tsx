import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { useEffect } from 'react';

function SlidesInner({ children, width, height }): React.JSX.Element {
  useEffect(() => {
    import('./initSlides').then(({ defaultInitSlides }) => {
      defaultInitSlides();
    });
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
}): React.JSX.Element {
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
