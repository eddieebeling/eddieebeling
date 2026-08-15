import { defineStore } from "pinia";

export const useSiteContentStore = defineStore("siteContent", {
  state: () => ({
    data: {},
  }),
  actions: {
    setContent(content) {
      const { meta = {}, navigation, ...document } = content;

      this.data = {
        ...document,
        ...meta,
        navigation,
      };
    },
  },
});
