import { GitContributors } from "F:/win10Data/text/VSCode/HTML/Vuepress_tut/vuepress_tut/dev/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "F:/win10Data/text/VSCode/HTML/Vuepress_tut/vuepress_tut/dev/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
