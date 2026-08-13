<template>
  <nav class="nav shell" aria-label="Primary navigation">
    <a class="wordmark" :href="isHome ? '#top' : '/'" aria-label="Eddie Ebeling home"><span class="wordmark-mark">EE</span><span>EDDIE EBELING</span></a>
    <div class="nav-links"><a :href="sectionHref('about')">About</a><a :href="sectionHref('technologies')">Technologies</a><a :href="sectionHref('experience')">Experience</a><a :href="sectionHref('contact')">Contact</a></div>
    <div class="nav-actions">
      <button class="theme-toggle" type="button" :aria-pressed="theme === 'light'" :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'" @click="toggleTheme"><span class="theme-toggle-icon" aria-hidden="true">{{ theme === "dark" ? "☼" : "☾" }}</span><span>{{ theme === "dark" ? "Light" : "Dark" }}</span></button>
    </div>
  </nav>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

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
