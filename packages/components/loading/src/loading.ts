export interface LoadingProps {
  text?: string | null;
  fullscreen?: boolean;
  lock?: boolean;
  customClass?: string | null;
  target?: HTMLElement | undefined;
  beforeClose?: () => boolean;
  closed?: () => void;
  unmount?: () => void;
}
