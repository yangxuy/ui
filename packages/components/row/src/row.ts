export interface RowProps {
  tag: string;
  justify:
    | "start"
    | "end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly";
  gutter: number;
  align: "top" | "middle" | "bottom";
}
