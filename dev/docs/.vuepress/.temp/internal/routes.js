export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/win10Data/text/VSCode/HTML/Vuepress_tut/vuepress_tut/dev/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"HELLO"} }],
  ["/community/community1.html", { loader: () => import(/* webpackChunkName: "community_community1.html" */"F:/win10Data/text/VSCode/HTML/Vuepress_tut/vuepress_tut/dev/docs/.vuepress/.temp/pages/community/community1.html.js"), meta: {"title":""} }],
  ["/community/community2.html", { loader: () => import(/* webpackChunkName: "community_community2.html" */"F:/win10Data/text/VSCode/HTML/Vuepress_tut/vuepress_tut/dev/docs/.vuepress/.temp/pages/community/community2.html.js"), meta: {"title":""} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"F:/win10Data/text/VSCode/HTML/Vuepress_tut/vuepress_tut/dev/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"指南"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/win10Data/text/VSCode/HTML/Vuepress_tut/vuepress_tut/dev/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
