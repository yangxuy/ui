import { Table } from "@tanstack/vue-table";
import { InjectionKey, MaybeRef, ToRefs } from "vue";

export interface ITableProps {
  data: MaybeRef<any>;
}

export interface TableColumnProps {
  type?: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  property?: string;
  prop?: string;
  sortable?: boolean;
  width?: string | number;
  minWidth?: string | number;
}

export interface TableColumnHeaderProps {
  filterFn: any;
  sortingFn: any;
  sortUndefined: number;
  aggregationFn: any;
  size: number;
  minSize: number;
  maxSize: number;
  enableSorting: boolean;
  accessorKey: string;
}

export interface TableColumnSlots {
  default?: () => any;
}

export type TableColumnInjectProps = ToRefs<TableColumnProps> &
  TableColumnSlots;

export interface TableContextProps {
  table: Table<any>;
  addColumn: (column: TableColumnInjectProps) => void;
}

export const tableContextKey: InjectionKey<TableContextProps> =
  Symbol("tableContextKey");
