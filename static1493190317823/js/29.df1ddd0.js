webpackJsonp([29],{178:function(e,s,t){var o=t(0)(t(719),t(886),null,null);o.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/demos/message/message2.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] message2.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},719:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={methods:{message:function(e){var s={info:"消息",success:"成功",warn:"警告",error:"错误"}[e];this.$Message({type:e,text:"这是一个"+s+"的消息"})}}}},886:function(e,s,t){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[t("button",{staticClass:"h-btn b-color-blue",on:{click:function(s){e.message("info")}}},[e._v("消息")]),e._v(" "),t("button",{staticClass:"h-btn b-color-green",on:{click:function(s){e.message("success")}}},[e._v("成功")]),e._v(" "),t("button",{staticClass:"h-btn b-color-yellow",on:{click:function(s){e.message("warn")}}},[e._v("警告")]),e._v(" "),t("button",{staticClass:"h-btn b-color-red",on:{click:function(s){e.message("error")}}},[e._v("错误")])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});