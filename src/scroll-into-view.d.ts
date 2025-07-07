declare module 'scroll-into-view' {
  interface AlignOptions {
    top?: number;
    left?: number;
    topOffset?: number;
    leftOffset?: number;
  }

  interface ScrollOptions {
    time?: number;
    ease?: (t: number) => number;
    align?: AlignOptions;
    validTarget?: (target: Element) => boolean;
    isScrollable?: (target: Element) => boolean;
  }

  function scrollIntoView(
    element: Element,
    options?: ScrollOptions,
    callback?: () => void
  ): void;

  export = scrollIntoView;
}
