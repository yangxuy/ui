<script>
import { defineComponent, h } from "vue";
export default defineComponent({
  props: {
    render: { type: Function, default: () => { } },
    column: { type: Object, default: () => { } },
    row: { type: Object, default: () => { } },
    cell: { type: Object, default: () => { } },
  },

  setup({
    render,
    column,
    row,
    cell,
  }) {

    return () => {
      const cellRender = render(cell.getContext());

      if (column.id === 'selection') {
        return h('input', {
          type: 'checkbox',
          checked: row.getIsSelected(),
          onChange: () => {
            if (row.original.selectable) {
              row.toggleSelected()
            }
          }
        });
      }

      return h('div',
        {
          class: "ss-table--body-cell"
        },
        typeof cellRender === "function" ?
          h(cellRender, { column: column, row: row.original, class: 'cell' })
          : cellRender
      )
    };
  },
});
</script>