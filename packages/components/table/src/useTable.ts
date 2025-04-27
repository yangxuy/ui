import {
  useVueTable,
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/vue-table";
import type { Row } from "@tanstack/vue-table";
import { ITableProps, TableColumnInjectProps, tableContextKey } from "./table";
import {
  computed,
  getCurrentInstance,
  onMounted,
  provide,
  ref,
  toRefs,
  CSSProperties,
} from "vue";
import { TableLayout } from "./tableLayout";

export function useTable(props: ITableProps, emit: any) {
  const sortable = ref(false);
  // 排序
  const sorting = ref([]);
  // 选择
  const rowSelection = ref();
  // 列显示隐藏
  const columnVisibility = ref({});
  const columnHelper = createColumnHelper<any>();
  const tableColumn = ref<TableColumnInjectProps[]>([]);

  const instance = getCurrentInstance();
  const tableLayout = new TableLayout(tableColumn, instance!, columnVisibility);

  const bodyWidth = computed(() => {
    return tableLayout.bodyWidth.value;
  });

  const columns = computed<any>(() => {
    return tableColumn.value.map((column) => {
      let cls = "";
      if (column.fixed === "left") {
        cls = "ss-table-fixed-left";
      } else if (column.fixed === "right") {
        cls = "ss-table-fixed-right";
      }

      const fixedStyle: any = {};
      if (column.fixed) {
        fixedStyle.position = "sticky";
        fixedStyle.zIndex = 10;
        if (column.fixed === "right") {
          fixedStyle.right = column.fixedWidth + "px";
        } else {
          fixedStyle.left = column.fixedWidth + "px";
        }
      }

      if (column.sortable && !sortable.value) {
        sortable.value = true;
      }

      if (column.type === "selection") {
        return columnHelper.display({
          id: "selection",
          header: "",
          cell: () => null,
          size: column.realWidth,
        });
      }

      if (column.type === "index") {
        return columnHelper.display({
          id: "index",
          size: column.realWidth,
          header: () => column.label || "序号",
          cell: (info) => info.row.index + 1,
        });
      }

      return columnHelper.accessor(column.prop!, {
        header: () => column.label,
        cell: (info) => {
          return column.default || info.getValue();
        },
        size: column.width || column.realWidth,
        minSize: column.minWidth,
        maxSize: column.maxWidth,
        enableSorting: column.sortable,
        meta: {
          style: [fixedStyle],
        },
        sortingFn: (rowA: Row<any>, rowB: Row<any>, columnId: string) => {
          const rowAValue = rowA.getValue(columnId);
          const rowBValue = rowB.getValue(columnId);

          // 自定义排序
          if (column.sortingFn) {
            return column.sortingFn(rowAValue, rowBValue);
          }

          // 默认排序
          return Number(rowAValue) - Number(rowBValue);
        },
      });
    });
  });

  const table = useVueTable<any>({
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
      get rowSelection() {
        return rowSelection.value;
      },
      get columnVisibility() {
        return columnVisibility.value;
      },
    },

    onSortingChange: (updater: any) => {
      sorting.value =
        typeof updater === "function" ? updater(sorting.value) : updater;
    },

    onRowSelectionChange: (updater: any) => {
      rowSelection.value =
        typeof updater === "function" ? updater(rowSelection.value) : updater;

      emit(
        "change-select",
        table.getSelectedRowModel().rows.map((row: any) => row.original)
      );
    },

    onColumnVisibilityChange: (updater: any) => {
      columnVisibility.value =
        typeof updater === "function"
          ? updater(columnVisibility.value)
          : updater;

      tableLayout.updateColumnWidth();
    },

    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const style = computed(() => {
    const style: CSSProperties = {};
    if (props.height || props.maxHeight) {
      style.overflowY = "auto";
      style.height = props.height ? props.height + "px" : "auto";
      style.maxHeight = props.maxHeight ? props.maxHeight + "px" : "auto";
    }
    return style;
  });

  const addColumn = (column: any) => {
    tableColumn.value.push(column);
  };

  provide(tableContextKey, {
    ...toRefs(props),
    table,
    addColumn,
  });

  onMounted(() => {
    tableLayout.updateColumnWidth();
  });

  return {
    table,
    bodyWidth,
    tableColumn,
    sortable,
    style,
  };
}
