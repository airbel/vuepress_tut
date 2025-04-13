import { CodeTabs } from "F:/win10Data/text/VSCode/HTML/Vuepress_tut/vuepress_tut/dev/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "F:/win10Data/text/VSCode/HTML/Vuepress_tut/vuepress_tut/dev/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "F:/win10Data/text/VSCode/HTML/Vuepress_tut/vuepress_tut/dev/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
