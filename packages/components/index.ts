import { App } from "vue";

export * from "./button";
import { SSButton } from "./button";

export * from "./row";
import { SSRow } from "./row";

export * from "./col";
import { SSCol } from "./col";

export * from "./loading";
import { SSLoading } from "./loading";

export * from "./message";

export * from "./container";
import { SSContainer } from "./container";

export * from "./overlay";
export { SSOverlay } from "./overlay";

export * from "./dialog";
import { SSDialog } from "./dialog";

export * from "./drawer";
import { SSDrawer } from "./drawer";

export * from "./space";
import { SSSpace } from "./space";

export * from "./notification";

export * from "./tooltip";
import { SSTooltip } from "./tooltip";

export * from "./popover";
import { SSPopover } from "./popover";

export * from "./form";
import { SSForm } from "./form";

export * from "./input";
import { SSInput } from "./input";

export * from "./icon";

export * from "./select";
import { SSSelect } from "./select";

export default (app: App) => {
  app.use(SSButton);
  app.use(SSRow);
  app.use(SSCol);
  app.use(SSLoading);
  app.use(SSContainer);
  app.use(SSDialog);
  app.use(SSDrawer);
  app.use(SSSpace);
  app.use(SSPopover);
  app.use(SSTooltip);
  app.use(SSForm);
  app.use(SSInput);
  app.use(SSInput);
  app.use(SSSelect);
};
