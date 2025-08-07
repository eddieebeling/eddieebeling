import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { n as navigateTo } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';

const _sfc_main = {
  __name: "thank-you",
  __ssrInlineRender: true,
  setup(__props) {
    const heading = ref("Thank You");
    const message = ref("I'll be in touch as soon as I check my email.");
    const photoUrl = ref("/img/eddie-ebeling-portrait.jpg");
    setTimeout(async () => {
      await navigateTo("/");
    }, 7500);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}><div class="header__intro"><img class="header__img"${ssrRenderAttr("src", unref(photoUrl))}${ssrRenderAttr("alt", _ctx.title)}><h1 class="header__name">${ssrInterpolate(unref(heading))}</h1><h2 class="header__title">${ssrInterpolate(unref(message))}</h2></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/thank-you.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=thank-you-DEsjaMDX.mjs.map
