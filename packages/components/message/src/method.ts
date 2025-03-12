import { useFnComponent } from "@yx-ui/hooks";
import MessageCtr from "./message.vue";
import { Message, MessageProps, messageTypes } from "./message";
import { createVNode } from "vue";

let instance: any = undefined;
let seed = 100;

const message: any = (options: MessageProps) => {
  if (instance) {
    instance.closed();
  }
  const id = `message_${seed++}`;
  const props = {
    ...options,
    id,
  };

  const vNode = createVNode(
    MessageCtr,
    props,
    typeof options.message !== "string"
      ? {
          default:
            typeof options.message == "function"
              ? options.message
              : () => options.message,
        }
      : null
  );

  instance = useFnComponent(vNode, options);

  return { closed: instance.closed };
};

messageTypes.forEach((type) => {
  message[type] = (props: MessageProps) => {
    message({
      ...props,
      type: type,
    });
  };
});

export default message as Message;
