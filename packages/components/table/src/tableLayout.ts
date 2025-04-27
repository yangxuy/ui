import { ComponentInternalInstance, ref, Ref } from "vue";
import { TableColumnInjectProps } from "./table";

export class TableLayout {
  table: ComponentInternalInstance;
  columns: Ref<TableColumnInjectProps[]>;
  columnVisibility: Ref<Record<string, boolean>>;

  bodyWidth: Ref<number> = ref(0);

  constructor(
    columns: any,
    table: ComponentInternalInstance,
    columnVisibility?: any
  ) {
    this.columns = columns;
    this.table = table;
    this.columnVisibility = columnVisibility;
  }

  updateColumnWidth() {
    // 获取容器的宽度
    const tableClientWidth =
      this.table.vnode.el?.clientWidth || document.body.clientWidth;

    // 获取所有显示的列
    const showAllColumns = this.columns.value.filter((column) => {
      if (this.columnVisibility.value[column.prop!] === false) {
        return false;
      }
      return true;
    });

    // 存储所有列宽
    let bodyMinWidth = 0;

    // 初始化处理
    showAllColumns.forEach((column) => {
      if (column.type == "selection" || column.type == "index") {
        // 给selection和index设置默认宽度
        column.width = column.width || 40;
        column.realWidth = column.width || 40;
        bodyMinWidth += column.width;
      } else {
        column.realWidth = 0;
      }

      // 如果列没有设置宽度，默认取80
      bodyMinWidth += column.width || column.minWidth;
    });

    // 获取自适应的列
    const flexColumns: TableColumnInjectProps[] = showAllColumns.filter(
      (column) => !column.width
    );

    // 获取固定的列
    const fixColumns: TableColumnInjectProps[] = showAllColumns.filter(
      (column) => column.width
    );

    // 计算固定列的宽度
    const fixColumnsWidth = fixColumns.reduce(
      (prev, column) => prev + column.width!,
      0
    );

    this.bodyWidth.value = fixColumnsWidth;

    // 计算flexColumns的宽度
    if (flexColumns.length > 0) {
      if (bodyMinWidth < tableClientWidth) {
        // 不需要滚动
        const flexColumnsWidth = tableClientWidth - fixColumnsWidth;
        const averageWidth = Math.floor(flexColumnsWidth / flexColumns.length);

        flexColumns.forEach((column) => {
          column.realWidth = Math.floor(averageWidth);
          this.bodyWidth.value += column.realWidth;
        });
      } else {
        // 需要滚动
        flexColumns.forEach((column) => {
          column.realWidth = Number(column.minWidth);
          this.bodyWidth.value += column.realWidth;
        });
      }
    }
    // 处理固定列的宽度
    const fixedLeftColumns: TableColumnInjectProps[] = showAllColumns.filter(
      (column) => column.fixed === "left" || column.fixed === true
    );
    const fixedRightColumns: TableColumnInjectProps[] = showAllColumns
      .filter((column) => column.fixed === "right")
      .reverse();

    let leftFixWidth = 0;
    fixedLeftColumns.forEach((column) => {
      column.fixedWidth = leftFixWidth;
      leftFixWidth += column.realWidth || column.width || column.minWidth;
    });

    let rightFixWidth = 0;
    fixedRightColumns.forEach((column) => {
      column.fixedWidth = rightFixWidth;
      rightFixWidth += column.realWidth || column.width || column.minWidth;
    });
  }
}
