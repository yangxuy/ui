import Form from "./src/form.vue";
import FormItem from "./src/form-item.vue";
import { withInstall } from "../utils/install";
export * from "./src/form";

export const SSForm = withInstall(Form, { FormItem });
export const SSFormItem = FormItem;

export default SSForm;
