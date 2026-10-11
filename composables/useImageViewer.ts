export type ViewerImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  origin: { left: number; top: number; width: number; height: number };
};

// DOM references stay client-side and outside Nuxt's serialised state.
let source: HTMLImageElement | null = null;
let trigger: HTMLElement | null = null;

export function useImageViewer() {
  const image = useState<ViewerImage | null>('image-viewer', () => null);

  function open(element: HTMLImageElement, button: HTMLElement) {
    if (image.value || !element.complete || !element.naturalWidth) return;
    source = element;
    trigger = button;
    const { left, top, width, height } = element.getBoundingClientRect();
    image.value = {
      src: element.currentSrc || element.src,
      alt: element.alt,
      width: element.naturalWidth,
      height: element.naturalHeight,
      origin: { left, top, width, height },
    };
  }

  function origin() {
    return source?.isConnected ? source.getBoundingClientRect() : image.value?.origin;
  }

  function restoreFocus() {
    if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    trigger = null;
    source = null;
  }

  return { image, open, origin, restoreFocus };
}
