import { withInstall, withNoopInstall } from "../utils/install";
import Container from "./src/container.vue";
import Header from "./src/header.vue";
import Footer from "./src/footer.vue";
import Main from "./src/main.vue";
import Aside from "./src/aside.vue";

export const SSContainer = withInstall(Container, {
  Header,
  Footer,
  Main,
  Aside,
});

export const SSAside = withNoopInstall(Aside);
export const SSHeader = withNoopInstall(Header);
export const SSFooter = withNoopInstall(Footer);
export const SSMain = withNoopInstall(Main);

export default SSContainer;
