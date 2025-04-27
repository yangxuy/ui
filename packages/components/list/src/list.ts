export interface ListProps {
  data: Array<any>;
  size: ((index: number) => number) | number;
  resize: boolean;
  height: number;
  width: number;
  hasMore: boolean;
  direction: "vertical" | "horizontal";
  loadMore: () => Promise<void>;
}
