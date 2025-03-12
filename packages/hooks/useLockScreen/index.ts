import { Ref, watch } from "vue";

export function useLockScreen(trigger: Ref<boolean>) {
  watch(
    () => trigger.value,
    (val) => {
      if (val) {
        //  禁用滚动
        document.body.style.overflow = "hidden";
      } else {
        // 开启滚动
        document.body.style.overflow = "";
      }
    }
  );
}
