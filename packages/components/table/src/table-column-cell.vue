<script>
import { defineComponent, h } from "vue";

export default defineComponent({
  props: {
    render: { type: Function, default: () => { } },
    column: { type: Object, default: () => { } },
    row: { type: Object, default: () => { } },
    cell: { type: Object, default: () => { } },
  },
  setup(props) {
    return () => {
      const cellRender = props.render(props.cell.getContext());

      if (typeof cellRender === "function") {
        return h(cellRender, { column: props.column, row: props.row });
      }

      return cellRender;
    };
  },
});
</script>