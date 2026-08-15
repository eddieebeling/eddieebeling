<template>
  <main class="thank-you">
    <SiteHeader />
    <section class="thank-you__content shell">
      <p class="eyebrow"><span class="eyebrow__dot" /> {{ content.thankYou.eyebrow }}</p>
      <h1>{{ content.thankYou.heading.lead }} <em>{{ content.thankYou.heading.emphasis }}</em></h1>
      <p>{{ content.thankYou.message }}</p>
      <a class="button button--primary" href="/">{{ content.thankYou.back }} <span class="button__icon" aria-hidden="true">{{ content.ui.externalLinkIcon }}</span></a>
    </section>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useSiteContentStore } from "~/stores/siteContent";

const siteContent = useSiteContentStore();
const content = computed(() => siteContent.data);

useHead(() => ({
  title: content.value.thankYou.title,
  meta: [{ name: "description", content: content.value.thankYou.description }],
}));
</script>
