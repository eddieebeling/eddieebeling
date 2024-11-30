<template>
  <main>
    <!-- <nav>
      <i class="fas fa-ellipsis-v"></i>
    </nav> -->
    <header class="header">
      <div class="header__intro">
        <img class="header__img" :src="photoUrl" :alt="title" />
        <h1 class="header__name">{{ name }}</h1>
        <h2 class="header__title">{{ title }}</h2>
        <nav class="header__social-links">
          <a
            v-for="(item, index) in socialLinks"
            :key="index"
            :href="item.url"
            :title="item.platform">
            <font-awesome v-if="item.platform === 'Codepen'" :icon="faCodepen" />
            <font-awesome v-else-if="item.platform === 'Github'" :icon="faGithub" />
            <font-awesome v-else-if="item.platform === 'Linkedin'" :icon="faLinkedin" />
            <font-awesome v-else-if="item.platform === 'Instagram'" :icon="faInstagram" />
          </a>
        </nav>
      </div>
    </header>
    <figure class="portrait">
        <img class="portrait__img" :src="photoUrl" :alt="`${name} ${title}`">
        <figcaption class="sr-only">{{ name }} is a {{ bio }}</figcaption>
    </figure>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { faGithub, faCodepen, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const name = ref('Eddie Ebeling');
const title = ref('UI/UX and Front End Developer');
const socialLinks = ref([
  { platform: "Instagram", icon: "instagram", url: "https://instagram.com/eddieebeling" },
  { platform: "Linkedin", icon: "linkedin-in", url: "https://linkedin.com/in/eddieebeling" },
  { platform: "Github", icon: "github", url: "https://github.com/eddieebeling" },
  { platform: "Codepen", icon: "codepen", url: "https://codepen.io/eddieebeling" },
]);
const bio = ref('Creative Technologist and Front End Developer specializing in cross-platform and multi-device web development using HTML, CSS, and JavaScript. Has a strong focus in user experience design and development for mobile and web-based applications.');
const photoUrl = ref('/img/eddie-ebeling-portrait.jpg');

useHead({
  title: name.value + ' | ' + title.value,
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;800&display=swap' },
  ],
});

useSeoMeta({
  title: name.value + ' | ' + title.value,
  ogTitle: 'EddieEbeling.com',
  description: `${name.value} is a ${bio.value}`,
  ogDescription: `${name.value} is a ${bio.value}`,
  ogImage: 'https://eddieebeling.com/img/eddie-ebeling.jpg',
});
</script>

<style lang="scss">
// CSS Custom Properties
:root {
    --color-gray-light: #f7f7f7;
    --color-gray-slate: rgb(103, 115, 128);
    --color-gray-slate-light: rgb(146, 167, 189);
    --color-gray-dark: #1b1b1b;
    --color-primary: rgba(36, 57, 80, 1);
    --color-primary-dark: rgba(19, 33, 48, 1);
    --color-secondary: rgba(105, 47, 12, 1);
    --color-secondary-light: rgba(139, 67, 34, 1);
    --color-alternate: rgba(167,127,88,1);
    --color-alternate-light: rgba(195,150,106,1);
}

// Font Face
$font-sans: "Montserrat", sans-serif;

// Color Variables
$gray-light: var(--color-gray-light);
$gray-slate: var(--color-gray-slate);
$gray-slate-light: var(--color-gray-slate-light);
$gray-dark: var(--color-gray-dark);
$primary: var(--color-primary);
$primary-dark: var(--color-primary-dark);
$secondary: var(--color-secondary);
$secondary-light: var(--color-secondary-light);
$alternate: var(--color-alternate);
$alternate-light: var(--color-alternate-light);

// Keyframes
@keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  * {
    box-sizing: border-box;
  }
  html,
  body {
    font-family: $font-sans;
    font-weight: 400;
    height: 100%;
    padding: 0;
    margin: 0;
    color: $gray-dark;
  }
  #__nuxt {
    height: 100%;
    position: relative;
  }
  .main {
    position: relative;
    display: flex;
  }
  .main > * { flex: 1; }

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $gray-dark;
  padding: 0 1rem;
  @media (min-width: 961px) {
      width: 50%;
  }
  &__intro {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 961px) {
        align-items: flex-start;
    }
  }
  &__img {
    background: #f7f7f7;
    animation: fadein 0.5s;
    width: 240px;
    height: 360px;
    clip-path: circle(30% at 50% 35%);
    margin-bottom: -116px;
    @media (min-width: 961px) {
        display: none;
    }
  }
  &__social-links {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    margin: 0 -0.8rem;
    height: 60px;
    a {
      color: $secondary;
      padding: 1rem;
      animation: fadein 0.5s;
      transition: all 0.2s linear;
    }
    a:hover {
      color: $secondary-light;
      transform: scale(1.12);
    }
  }
  &__name {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.5;
    margin: 0;
    color: $primary;
    text-align: center;

    @media (min-width: 961px) {
      font-size: 3.5rem;
      letter-spacing: -0.2rem;
      line-height: 1.2;
    }
  }
  &__title {
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 1.2;
    margin: 0;
    color: rgba(124, 134, 144, 1);
    text-align: center;
    @media (min-width: 961px) {
      font-size: 1.625rem;
    }
  }
}

.portrait {
  transition: background 0.3s ease-in 0.2s;
  background: #f7f7f7;
  height:100%;
  width:50%;
  margin:0;
  animation: fadein 0.5s;
  display: none;

  @media (min-width: 961px) {
      display: flex;
  }

  &__img {
    object-fit: cover;
    width:100%; 
    height:100%;
  }
}


@media (prefers-color-scheme: dark) {
  body {
    background: $primary-dark;
  }
  .header {
    h1 {
      color: $gray-light;
    }
    h2 {
      color: $gray-slate-light;
    }
    &__social-links {
      a {
        color: $alternate-light;
      }
      a:hover {
        color: $alternate;
      }
    }
  }
}
</style>