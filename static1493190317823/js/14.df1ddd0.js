webpackJsonp([14],{193:function(e,o,t){var n=t(0)(t(734),t(929),null,null);n.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/demos/message/notice2.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] notice2.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},734:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={methods:{notice:function(e){var o={info:"消息",success:"成功",warn:"警告",error:"错误"}[e];this.$Notice[e]("这是一个"+o+"的通知")}}}},929:function(e,o,t){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("p",[t("button",{staticClass:"h-btn b-color-blue",on:{click:function(o){e.notice("info")}}},[e._v("消息")]),e._v(" "),t("button",{staticClass:"h-btn b-color-green",on:{click:function(o){e.notice("success")}}},[e._v("成功")]),e._v(" "),t("button",{staticClass:"h-btn b-color-yellow",on:{click:function(o){e.notice("warn")}}},[e._v("警告")]),e._v(" "),t("button",{staticClass:"h-btn b-color-red",on:{click:function(o){e.notice("error")}}},[e._v("错误")])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});