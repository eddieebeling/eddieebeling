<template>
  <NuxtPage />
</template>

<script setup>
import { useSiteContentStore } from "~/stores/siteContent";

const siteContent = useSiteContentStore();
const { data: siteContentData } = await useAsyncData("site-content", () => $fetch("/api/site-content"));

if (!siteContentData.value) {
  throw createError({ statusCode: 500, statusMessage: "Site content could not be loaded." });
}

siteContent.setContent(siteContentData.value);

useHead(() => ({
  title: siteContent.data.metadata.title,
  meta: [{ name: "description", content: siteContent.data.metadata.description }],
}));
</script>
