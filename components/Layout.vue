<template>
  <div class="main">
    <div class="header">
      <div class="header__intro">
        <img class="profile-pic" :src="photoUrl" :alt="title" />
        <h1>{{ name }}</h1>
        <h2>{{ title }}</h2>
        <div class="header__social-links">
          <a
            v-for="(item, index) in socialLinks"
            v-bind:key="index"
            v-bind:href="item.url"
            v-bind:title="item.platform"
            class=""
          >
            <i class="fab" v-bind:class="'fa-' + item.icon"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="portrait" :style="`background-image:url('${photoUrl}');`"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: "Eddie Ebeling",
      title: "UI/UX and Front End Developer",
      photoUrl: "/eddie-ebeling-portrait.jpg",
      socialLinks: [
        {
          platform: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/eddieebeling",
        },
        {
          platform: "LinkedIn",
          icon: "linkedin-in",
          url: "https://linkedin.com/in/eddieebeling",
        },
        {
          platform: "Github",
          icon: "github",
          url: "https://github.com/eddieebeling",
        },
        {
          platform: "Codepen",
          icon: "codepen",
          url: "https://codepen.io/eddieebeling",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import "./scss/main.scss";

.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $gray-dark;
  padding: 0 1rem;
  &__intro {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 961px) {
        align-items: flex-start;
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
  h1 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.5;
    margin: 0;
    color: $primary;

    @media (min-width: 961px) {
      font-size: 3.5rem;
      letter-spacing: -0.2rem;
      line-height: 1.2;
    }
  }
  h2 {
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 1.2;
    margin: 0;
    color: rgba(124, 134, 144, 1);
    @media (min-width: 961px) {
      font-size: 1.625rem;
    }
  }
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.profile-pic {
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
.portrait {
  transition: background 0.3s ease-in 0.2s;
  background: #f7f7f7;
  background-size: cover;
  background-position: center center;
  height: 100%;
  background-position: center;
  background-image: url("/eddie-ebeling.jpg");
  background-repeat: no-repeat;
  animation: fadein 0.5s;
  display: none;

  @media (min-width: 961px) {
      width: 50%;
      display: block;
  }

  &__img {
    min-width: 100%;
    max-height: 100%;
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