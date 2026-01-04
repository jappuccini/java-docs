import React, { useEffect } from 'react';

export default function Slides({
  children,
  initSlides,
  width = null,
  height = null,
}): React.JSX.Element {
  useEffect(() => {
    initSlides();
  });

  return (
    <div
      className="reveal reveal-viewport"
      style={{ width: width ?? '100vw', height: height ?? '100vh' }}
    >
      <div className="slides">{children}</div>
    </div>
  );
}
