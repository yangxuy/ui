export interface DrawerProps {
  appendTo: string;
  direction: "ltr" | "rtl" | "ttb" | "btt";
  size: string | number;
  showClose: boolean;
  title?: string;
  destroyOnClose?: boolean;
}
