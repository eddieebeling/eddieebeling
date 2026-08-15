<template>
  <nav class="site-header shell" :aria-label="content.navigation.ariaLabel">
    <a class="site-header__wordmark" :href="isHome ? '#top' : '/'" :aria-label="content.brand.homeLabel"><span class="site-header__mark">{{ content.brand.mark }}</span><span>{{ content.brand.name }}</span></a>
    <div class="site-header__links"><a v-for="link in content.navigation.links" :key="link.id" :href="sectionHref(link.id)">{{ link.label }}</a></div>
    <div class="site-header__actions">
      <button class="site-header__theme-toggle" type="button" :aria-pressed="theme === 'light'" :aria-label="theme === 'dark' ? content.navigation.theme.switchToLight : content.navigation.theme.switchToDark" @click="toggleTheme"><span class="site-header__theme-icon" aria-hidden="true">{{ theme === "dark" ? content.ui.lightThemeIcon : content.ui.darkThemeIcon }}</span><span>{{ theme === "dark" ? content.navigation.theme.light : content.navigation.theme.dark }}</span></button>
    </div>
  </nav>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useSiteContentStore } from "~/stores/siteContent";

const siteContent = useSiteContentStore();
const content = computed(() => siteContent.data);
const route = useRoute();
const theme = ref("dark");
const isHome = computed(() => route.path === "/");

const sectionHref = (section) => (isHome.value ? `#${section}` : `/#${section}`);

const setTheme = (nextTheme) => {
  theme.value = nextTheme;

  if (!import.meta.client) return;

  if (nextTheme === "light") {
    document.documentElement.dataset.theme = "light";
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  localStorage.setItem("ee-theme", nextTheme);
};

const toggleTheme = () => {
  setTheme(theme.value === "dark" ? "light" : "dark");
};

onMounted(() => {
  const savedTheme = localStorage.getItem("ee-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    setTheme(savedTheme);
  }
});
</script>
