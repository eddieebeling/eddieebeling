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
          <a v-for="(item, index) in socialLinks" :key="index" :href="item.url" :title="item.platform">
            <font-awesome v-if="item.platform === 'Codepen'" :icon="faCodepen" />
            <font-awesome v-else-if="item.platform === 'Github'" :icon="faGithub" />
            <font-awesome v-else-if="item.platform === 'Linkedin'" :icon="faLinkedin" />
            <font-awesome v-else-if="item.platform === 'Instagram'" :icon="faInstagram" />
          </a>
        </nav>
        <section class="section">
          <button class="section__cta" @click="openDialog">Contact me</button>
        </section>
        <dialog ref="dialog" class="dialog">
          <form name="contact" method="POST" data-netlify="true" class="dialog__form">
            <h2 class="dialog__title">Let's chat...</h2>
            <input type="hidden" name="subject" :value="`A new message from ${contactName}`" />
            <label for="name" class="dialog__label">
              <span>Name</span>
              <input type="text" id="name" name="name" required />
            </label>
            <label for="email" class="dialog__label">
              <span>Email</span>
              <input type="email" id="email" name="email" required />
            </label>
            <label for="message" class="dialog__label">
              <span>Message</span>
              <textarea id="message" name="message" required></textarea>
            </label>
            <div class="dialog__buttons">
              <button type="submit">Submit</button>
              <button type="button" @click="closeDialog" class="secondary">Cancel</button>
            </div>
          </form>
        </dialog>
      </div>
    </header>
    <figure class="portrait">
      <img class="portrait__img" :src="photoUrl" :alt="`${name} ${title}`" />
      <figcaption class="sr-only">{{ name }} is a {{ bio }}</figcaption>
    </figure>
  </main>
</template>

<script setup>
import { ref } from "vue";
import {
  faGithub,
  faCodepen,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const name = ref("Eddie Ebeling");
const title = ref("UI/UX and Front End Developer");
const socialLinks = ref([
  { platform: "Instagram", url: "https://instagram.com/eddieebeling" },
  { platform: "Linkedin", url: "https://linkedin.com/in/eddieebeling" },
  { platform: "Github", url: "https://github.com/eddieebeling" },
  { platform: "Codepen", url: "https://codepen.io/eddieebeling" },
]);
const bio = ref(
  "Creative Technologist and Front End Developer specializing in cross-platform and multi-device web development using HTML, CSS, and JavaScript. Has a strong focus in user experience design and development for mobile and web-based applications."
);
const photoUrl = ref("/img/eddie-ebeling-portrait.jpg");
const dialog = ref(null);

useHead({
  title: name.value + " | " + title.value,
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;800&display=swap",
    },
  ],
});

useSeoMeta({
  title: name.value + " | " + title.value,
  ogTitle: name.value + " | " + title.value,
  description: `${name.value} is a ${bio.value}`,
  ogDescription: `${name.value} is a ${bio.value}`,
  ogImage: "https://eddieebeling.com/img/eddie-ebeling-small.jpg",
});

const openDialog = () => {
  dialog.value.showModal();
};

const closeDialog = () => {
  dialog.value.close();
};
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
  --color-alternate: rgba(167, 127, 88, 1);
  --color-alternate-light: rgba(195, 150, 106, 1);
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

.main>* {
  flex: 1;
}

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
    width: 55%;
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

.section {
  padding: 1rem 0;

  &__cta {
    background: transparent;
    color: $alternate;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.125rem;
    font-weight: 800;
    margin: 1rem 0;
    cursor: pointer;
    transition: all 0.2s linear;
    border: solid 2px $alternate;
    border-radius: 0.3125rem;

    &::after {
      content: "😀";
      margin-left: 0.5rem;
      font-size: 1.25rem;
    }

    &:hover {
      background: $alternate;
      color: white;

      &::after {
        content: "😉";
      }
    }
  }
}

.portrait {
  transition: background 0.3s ease-in 0.2s;
  background: #f7f7f7;
  height: 100%;
  width: 45%;
  margin: 0;
  animation: fadein 0.5s;
  display: none;

  @media (min-width: 961px) {
    display: flex;
  }

  &__img {
    object-fit: cover;
    width: 100%;
    height: 100%;
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

/* Dialog Styles */
.dialog {
  min-width: 375px;
  max-width: 375px;

  &__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: $gray-slate;
    transition: all 0.2s linear;

    &:hover {
      color: $gray-slate-light;
    }
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 800;
    color: $primary;
    margin-top: .5rem;
    margin-bottom: 0;
  }

  &__label {
    display: flex;
    flex-direction: column;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    position: relative;


    span {
      font-size: 0.875rem;
      margin-bottom: 0.25rem;
      color: $primary;
    }

    input,
    textarea {
      padding: 0.8125rem 1rem;
      border: 1px solid $gray-slate-light;
      border-radius: 0.25rem;
      font-family: $font-sans;
      color: $gray-slate;
    }
    textarea {
      resize: none;
      height: 100px;
    }

    button {
      background: $alternate;
      color: white;
      border: none;
      padding: 1rem 2rem;
      font-size: 1.125rem;
      font-weight: 800;
      margin: 0.5rem 0 0 0;
      cursor: pointer;
      transition: all 0.2s linear;
      border-radius: 0.3125rem;
      width: 100%;

      &:hover {
        background: $alternate-light;
      }
    }
  }

  &__buttons {
    display: flex;

    .secondary {
      background: transparent;
      color: $alternate;

      &:hover {
        background: transparent;
        color: $alternate-light;
      }
    }
  }
}

/*   Open state of the dialog  */
dialog[open] {
  opacity: 1;
  transform: scaleY(1);
  padding: 0;
}

/*   Closed state of the dialog   */
dialog {
  opacity: 0;
  transform: scaleY(0);
  transition: opacity 0.2s ease-out, transform 0.2s ease-out,
    overlay 0.2s ease-out allow-discrete, display 0.2s ease-out allow-discrete;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

/*   Before-open state  */
/* Needs to be after the previous dialog[open] rule to take effect,
    as the specificity is the same */
@starting-style {
  dialog[open] {
    opacity: 0;
    transform: scaleY(0);
  }
}

/* Transition the :backdrop when the dialog modal is promoted to the top layer */
dialog::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition: display 0.2s allow-discrete, overlay 0.2s allow-discrete,
    background-color 0.2s;
  /* Equivalent to
  transition: all 0.7s allow-discrete; */
}

dialog[open]::backdrop {
  background-color: rgb(0 0 0 / 70%);
}

/* This starting-style rule cannot be nested inside the above selector
because the nesting selector cannot represent pseudo-elements. */

@starting-style {
  dialog[open]::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}</style>