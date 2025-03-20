import {
  useVueTable,
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/vue-table";
import { ITableProps, TableColumnInjectProps, tableContextKey } from "./table";
import { computed, provide, ref, toRefs } from "vue";

export function useTable(props: ITableProps) {
  const sortable = ref(false);
  const sorting = ref([]);
  const columnHelper = createColumnHelper<any>();
  const tableColumn = ref<TableColumnInjectProps[]>([]);

  const columns = computed<any>(() => {
    return tableColumn.value.map((column) => {
      if (column.sortable && !sortable.value) {
        sortable.value = true;
      }

      if (column.type === "index") {
        return columnHelper.display({
          id: "index",
          header: "Index",
          cell: (info) => info.row.index + 1,
        });
      }

      return columnHelper.accessor(column.prop!, {
        header: () => column.label,
        cell: (info) => {
          return column.default || info.getValue();
        },
        enableSorting: column.sortable,
      });
    });
  });

  const table = useVueTable({
    get columns() {
      return columns.value;
    },

    get data() {
      return props.data;
    },

    state: {
      get sorting() {
        return sorting.value;
      },
    },

    onSortingChange: (updater: any) => {
      sorting.value =
        typeof updater === "function" ? updater(sorting.value) : updater;
    },

    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const addColumn = (column: any) => {
    tableColumn.value.push(column);
  };

  provide(tableContextKey, {
    ...toRefs(props),
    table,
    addColumn,
  });

  return table;
}
