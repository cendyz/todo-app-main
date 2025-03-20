import { defineComponent, ref, mergeProps, unref, useSSRContext, reactive, computed, resolveDirective, watch } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { defineStore } from 'pinia';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';
import 'vue-router';

const useToDoStore = defineStore("toDo", {
  state: () => {
    return {
      isLight: false
    };
  }
});

const moon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='26'%20height='26'%3e%3cpath%20fill='%23FFF'%20fill-rule='evenodd'%20d='M13%200c.81%200%201.603.074%202.373.216C10.593%201.199%207%205.43%207%2010.5%207%2016.299%2011.701%2021%2017.5%2021c2.996%200%205.7-1.255%207.613-3.268C23.22%2022.572%2018.51%2026%2013%2026%205.82%2026%200%2020.18%200%2013S5.82%200%2013%200z'/%3e%3c/svg%3e";

const sun = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='26'%20height='26'%3e%3cpath%20fill='%23FFF'%20fill-rule='evenodd'%20d='M13%2021a1%201%200%20011%201v3a1%201%200%2011-2%200v-3a1%201%200%20011-1zm-5.657-2.343a1%201%200%20010%201.414l-2.121%202.121a1%201%200%2001-1.414-1.414l2.12-2.121a1%201%200%20011.415%200zm12.728%200l2.121%202.121a1%201%200%2001-1.414%201.414l-2.121-2.12a1%201%200%20011.414-1.415zM13%208a5%205%200%20110%2010%205%205%200%20010-10zm12%204a1%201%200%20110%202h-3a1%201%200%20110-2h3zM4%2012a1%201%200%20110%202H1a1%201%200%20110-2h3zm18.192-8.192a1%201%200%20010%201.414l-2.12%202.121a1%201%200%2001-1.415-1.414l2.121-2.121a1%201%200%20011.414%200zm-16.97%200l2.121%202.12A1%201%200%20015.93%207.344L3.808%205.222a1%201%200%20011.414-1.414zM13%200a1%201%200%20011%201v3a1%201%200%2011-2%200V1a1%201%200%20011-1z'/%3e%3c/svg%3e";

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useToDoStore();
    const themeIconStyles = ref("block w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem]");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "px-[2.5rem] py-[5rem] flex justify-between items-center relative z-10 container lg:w-[70rem] lg:pt-[9rem]" }, _attrs))} data-v-183d789b><h1 class="uppercase text-light-gray-100 font-w700 text-[2.6rem] tracking-[1rem] leading-[0] pt-[.7rem] lg:text-[4rem]" data-v-183d789b> todo </h1>`);
      if (!unref(store).isLight) {
        _push(`<button data-v-183d789b><img${ssrRenderAttr("src", unref(sun))} alt="light theme&#39;" class="${ssrRenderClass(unref(themeIconStyles))}" data-v-183d789b></button>`);
      } else {
        _push(`<button data-v-183d789b><img${ssrRenderAttr("src", unref(moon))} alt="dark theme" class="${ssrRenderClass(unref(themeIconStyles))}" data-v-183d789b></button>`);
      }
      _push(`</header>`);
    };
  }
});

const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-183d789b"]]);

const x = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%3e%3cpath%20fill='%23494C6B'%20fill-rule='evenodd'%20d='M16.97%200l.708.707L9.546%208.84l8.132%208.132-.707.707-8.132-8.132-8.132%208.132L0%2016.97l8.132-8.132L0%20.707.707%200%208.84%208.132%2016.971%200z'/%3e%3c/svg%3e";

const check = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='11'%20height='9'%3e%3cpath%20fill='none'%20stroke='%23FFF'%20stroke-width='2'%20d='M1%204.304L3.696%207l6-6'/%3e%3c/svg%3e";

const btnStyles = "w-[2rem] h-[2rem] mr-[1rem] rounded-full border-[1px] border-light-gray-300 dark:border-dark-gray-500 lg:w-[2.3rem] lg:h-[2.3rem] lg:mr-[2.5rem]";
const taskStyles = "py-[1.1rem] bg-light-gray-100 dark:bg-dark-gray-200 flex items-center px-[1.7rem] lg:px-[2.5rem]";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Form",
  __ssrInlineRender: true,
  setup(__props) {
    const isCompleted = ref(["Complete online JavaScript course"]);
    const inputData = reactive({
      task: ""
    });
    const typeTask = ref(0);
    const taskData = ref([
      "Complete online JavaScript course",
      "Joq around the park 3x",
      "10 minutes meditation",
      "Read for 1 hour",
      "Pick up groceries",
      "Complete Todo App on Frontend Mentor"
    ]);
    const allTasks = computed(() => taskData.value);
    const activeTasks = computed(() => taskData.value.filter((el) => !isCompleted.value.includes(el)));
    const completedTasks = computed(() => taskData.value.filter((el) => isCompleted.value.includes(el)));
    const actualData = computed(() => {
      if (typeTask.value === 1) return activeTasks.value;
      if (typeTask.value === 2) return completedTasks.value;
      return allTasks.value;
    });
    const itemsLeft = computed(() => activeTasks.value.length);
    ref(null);
    const lastBtns = ref(["all", "active", "completed"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "z-10 relative rounded-xl overflow-hidden" }, _attrs))} data-v-fa0fff4a><div class="mb-[2rem] lg:py-[1.5rem] py-[1.1rem] bg-light-gray-100 dark:bg-dark-gray-200 flex items-center px-[1.7rem] rounded-xl lg:px-[2.5rem]" data-v-fa0fff4a><button type="submit" aria-labelledby="add task" class="p-[0.9rem] px-[.95rem] lg:p-[1.09rem] mr-[1rem] rounded-full border-[1px] border-light-gray-300 dark:border-dark-gray-500 lg:w-[2.3rem] lg:h-[2.3rem] lg:mr-[2.5rem]" data-v-fa0fff4a></button><input type="text"${ssrRenderAttr("value", unref(inputData).task)} class="block pt-[.3rem] outline-none leading-[0] w-full text-[1.2rem] text-light-gray-500 dark:text-dark-gray-300 bg-transparent lg:text-[1.8rem] placeholder:text-neutral-500" placeholder="Create a new todo..." data-v-fa0fff4a></div><div class="rounded-xl overflow-hidden" data-v-fa0fff4a><ul${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_auto_animate))} data-v-fa0fff4a><!--[-->`);
      ssrRenderList(unref(actualData), (item, index) => {
        _push(`<li${ssrRenderAttr("draggable", true)} class="${ssrRenderClass([taskStyles, "flex items-center rounded-none border-b-[1px] border-b-light-gray-300 dark:border-b-dark-gray-700 cursor-move py-[1.5rem] active:cursor-grab"])}" data-v-fa0fff4a><button aria-labelledby="checking image" type="button" class="${ssrRenderClass([[
          btnStyles,
          !unref(activeTasks).includes(item) && "bg-gradient-to-br from-primary-from to-primary-to border-none"
        ], "flex justify-center items-center"])}" data-v-fa0fff4a>`);
        if (!unref(activeTasks).includes(item)) {
          _push(`<img${ssrRenderAttr("src", unref(check))} alt="checked task" class="${ssrRenderClass(!unref(activeTasks).includes(item) ? "w-[.8rem] h-[.8rem]" : "")}" data-v-fa0fff4a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button><p class="${ssrRenderClass([!unref(activeTasks).includes(item) ? "line-through dark:text-dark-gray-500" : "", "text-[1.2rem] text-light-gray-500 pt-[.4rem] dark:text-dark-gray-300 transition-none lg:text-[1.7rem]"])}" data-v-fa0fff4a>${ssrInterpolate(item)}</p><button type="button" aria-labelledby="delete task" class="block ml-auto cursor-pointer" data-v-fa0fff4a><img${ssrRenderAttr("src", unref(x))} alt="delete task" class="w-[1.5rem] h-[1.5rem]" data-v-fa0fff4a></button></li>`);
      });
      _push(`<!--]--></ul><div class="bg-light-gray-100 dark:bg-dark-gray-200 dark:text-gray-500 text-[1.2rem] flex justify-between items-center py-[1.7rem] px-[1.7rem] text-light-gray-400 lg:text-[1.6rem] lg:py-[.7rem] lg:px-[2.5rem]" data-v-fa0fff4a><p data-v-fa0fff4a>${ssrInterpolate(unref(itemsLeft))} items left</p><div class="${ssrRenderClass([taskStyles, "justify-center gap-x-[2rem] hidden lg:flex"])}" data-v-fa0fff4a><!--[-->`);
      ssrRenderList(unref(lastBtns), (item, index) => {
        _push(`<button class="${ssrRenderClass([[unref(typeTask) == index ? "text-primary-blue dark:text-primary-blue" : ""], "capitalize pt-[.3rem] text-[1.5rem] font-w700 text-light-gray-400 dark:text-dark-gray-500 transition-none lg:text-[1.6rem]"])}" data-v-fa0fff4a>${ssrInterpolate(item)}</button>`);
      });
      _push(`<!--]--></div><button type="button" class="capitalize lg:text-[1.6rem]" data-v-fa0fff4a>clear completed</button></div></div><div class="${ssrRenderClass([taskStyles, "justify-center gap-x-[2rem] mt-[2rem] lg:hidden"])}" data-v-fa0fff4a><!--[-->`);
      ssrRenderList(unref(lastBtns), (item, index) => {
        _push(`<button class="${ssrRenderClass([[unref(typeTask) == index ? "text-primary-blue dark:text-primary-blue" : ""], "capitalize pt-[.3rem] text-[1.5rem] font-w700 text-light-gray-400 dark:text-dark-gray-500 transition-none lg:text-[1.6rem]"])}" data-v-fa0fff4a>${ssrInterpolate(item)}</button>`);
      });
      _push(`<!--]--></div><div class="my-[3rem] py-[4rem] text-center border-2 border-transparent rounded-xl text-light-gray-400 dark:text-dark-gray-600 text-[1.4rem] lg:text-[1.6rem]" data-v-fa0fff4a><p data-v-fa0fff4a>Drag and drop to reorder list</p></div></form>`);
    };
  }
});

const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/Form.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fa0fff4a"]]);

const lightMobile = "" + __buildAssetsURL("bg-mobile-light.eXTHhUPU.jpg");

const darkMobile = "" + __buildAssetsURL("bg-mobile-dark.DBhZPurk.jpg");

const darkDesktop = "" + __buildAssetsURL("bg-desktop-dark.DzAvO98h.jpg");

const lightDesk = "" + __buildAssetsURL("bg-desktop-light.BIdKokTn.jpg");

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useToDoStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Form = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "px-[2.5rem] lg:w-[70rem] lg:mx-auto container" }, _attrs))} data-v-f3368d9f>`);
      _push(ssrRenderComponent(_component_Form, null, null, _parent));
      if (unref(store).isLight) {
        _push(`<picture data-v-f3368d9f><source${ssrRenderAttr("srcset", unref(darkDesktop))} media="(min-width: 1024px)" data-v-f3368d9f><img${ssrRenderAttr("src", unref(darkMobile))} alt="mountains" class="absolute top-0 left-0 z-0 w-full" data-v-f3368d9f></picture>`);
      } else {
        _push(`<picture data-v-f3368d9f><source${ssrRenderAttr("srcset", unref(lightDesk))} media="(min-width: 1024px)" data-v-f3368d9f><img${ssrRenderAttr("src", unref(lightMobile))} alt="hall" class="absolute top-0 left-0 z-0 w-full" data-v-f3368d9f></picture>`);
      }
      _push(`</main>`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Main/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f3368d9f"]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useToDoStore();
    watch(
      () => !store.isLight,
      (newValue) => {
        if (newValue) {
          (void 0).documentElement.classList.add("dark");
          (void 0).documentElement.classList.remove("light");
        } else {
          (void 0).documentElement.classList.add("light");
          (void 0).documentElement.classList.remove("dark");
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0$1;
      const _component_Main = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(ssrRenderComponent(_component_Main, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
