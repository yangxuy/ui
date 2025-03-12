import Select from "./src/select.vue";
import SelectOption from "./src/select-option.vue";
import { withInstall } from "../utils/install";

export const SSSelectOption = SelectOption;

export const SSSelect = withInstall(Select, { SelectOption });

export default SSSelect;
