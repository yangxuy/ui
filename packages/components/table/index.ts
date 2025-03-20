import { withInstall } from "../utils/install";
import Table from "./src/table.vue";
import TableColumn from "./src/table-column.vue";
export const SSTableColumn = TableColumn;
export const SSTable = withInstall(Table, { TableColumn });

export default SSTable;
