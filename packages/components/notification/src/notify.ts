import { createVNode } from "vue";
import { NotificationProps, Notify, notifyTypes } from "./notification";
import NotifyCtr from "./notification.vue";
import { useFnComponent } from "@yx-ui/hooks";

let instance: any = undefined;
let seed = 100;

const notify: any = (options: NotificationProps) => {
  if (instance) {
    instance.closed();
  }

  const id = `message_${seed++}`;
  const props = {
    ...options,
    id,
  };

  const vNode = createVNode(
    NotifyCtr,
    props,
    typeof options.message != "string"
      ? {
          default:
            typeof options.message == "function"
              ? options.message
              : () => options.message,
        }
      : ""
  );

  instance = useFnComponent(vNode, options);
  console.log(instance);
  return instance;
};

notifyTypes.forEach((type) => {
  notify[type] = (options: NotificationProps) => {
    notify({
      ...options,
      type: type,
    });
  };
});

export default notify as Notify;
