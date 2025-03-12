import { defineComponent, h, renderSlot } from "vue";

export default defineComponent({
  name: "ss-overlay",
  setup(props: any, { slots, emit }) {
    return () => {
      return h(
        "div",
        {
          class: "ss",
          style: {
            zIndex: props.zIndex,
            position: "fixed",
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
        },
        [renderSlot(slots, "default")]
      );
    };
  },
});
