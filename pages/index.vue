<template>
  <main id="top">
    <SiteHeader />

    <section class="hero shell">
      <div class="hero__copy">
        <p class="eyebrow"><span class="eyebrow__dot" /> {{ content.hero.eyebrow }}</p>
        <h1>{{ content.hero.heading.lead }} <em>{{ content.hero.heading.emphasis }}</em></h1>
        <p class="hero__intro">{{ content.hero.intro }}</p>
        <div class="hero__actions"><a class="button button--primary" href="#experience">{{ content.hero.actions.experience }} <span class="button__icon" aria-hidden="true">{{ content.ui.downArrowIcon }}</span></a><a class="text-link" :href="socialLinks.github.href" target="_blank" rel="noreferrer">{{ content.hero.actions.github }} <span class="text-link__icon" aria-hidden="true">{{ content.ui.externalLinkIcon }}</span></a></div>
        <div class="hero__note"><span class="hero__line" /><span>{{ content.hero.note.prefix }} <strong>{{ content.hero.note.company }}</strong> · {{ content.hero.note.location }}</span></div>
      </div>
      <div class="hero__visual" :aria-label="content.hero.visual.ariaLabel">
        <div class="hero__orbit hero__orbit--one" /><div class="hero__orbit hero__orbit--two" />
        <div class="hero__portrait-frame"><img src="/eddie-ebeling.jpg" :alt="content.hero.visual.imageAlt" class="hero__portrait" /></div>
        <div class="hero__stamp"><span>{{ content.hero.visual.stampNumber }}</span><span>{{ content.hero.visual.stampWords[0] }}<br />{{ content.hero.visual.stampWords[1] }}<br />{{ content.hero.visual.stampWords[2] }}</span></div>
        <div class="hero__caption">{{ content.hero.visual.caption[0] }}<br />{{ content.hero.visual.caption[1] }}</div>
      </div>
    </section>

    <div class="capabilities" :aria-label="content.capabilitiesLabel"><div class="capabilities__track"><span class="capabilities__item" v-for="(capability, index) in [...content.capabilities, ...content.capabilities]" :key="`${capability}-${index}`"><i class="capabilities__marker" />{{ capability }}</span></div></div>

    <section id="about" class="about shell">
      <div class="section-label">{{ content.sections.about.label }}</div>
      <div class="about__grid"><h2>{{ content.about.heading }}</h2><div class="about__copy"><p v-for="paragraph in content.about.paragraphs" :key="paragraph">{{ paragraph }}</p><a class="text-link" :href="socialLinks.linkedin.href" target="_blank" rel="noreferrer">{{ content.about.linkedInLabel }} <span class="text-link__icon" aria-hidden="true">{{ content.ui.externalLinkIcon }}</span></a></div></div>
    </section>

    <section id="technologies" class="technologies shell">
      <div class="section-label">{{ content.sections.technologies.label }}</div>
      <div class="technologies__heading"><h2>{{ content.technologies.heading.lead }} <span>{{ content.technologies.heading.emphasis }}</span> {{ content.technologies.heading.tail }}</h2><p>{{ content.technologies.description }}</p></div>
      <div class="technologies__list" :aria-label="content.technologies.ariaLabel"><span class="technologies__item" v-for="(technology, index) in content.technologies.items" :key="technology"><small class="technologies__index">{{ String(index + 1).padStart(2, "0") }}</small>{{ technology }}</span></div>
    </section>

    <section id="experience" class="career shell">
      <div class="section-label">{{ content.sections.experience.label }}</div>
      <div class="career__heading"><h2>{{ content.experience.heading.lead }}<span>{{ content.experience.heading.emphasis }}</span></h2><div class="career__meta"><strong>{{ content.experience.meta.role }}</strong><span>{{ content.experience.meta.status }}<br />{{ content.experience.meta.location }}</span></div></div>
      <div class="career__list"><article v-for="item in content.experience.roles" :key="`${item.company}-${item.years}`" class="career__row"><span class="career__years">{{ item.years }}</span><div class="career__main"><h3>{{ item.role }}</h3><p>{{ item.detail }}</p></div><span class="career__company">{{ item.company }}</span></article></div>
      <div class="career__footer"><span>{{ content.experience.footerLabel }}</span><a class="text-link" :href="socialLinks.linkedin.href" target="_blank" rel="noreferrer">{{ content.experience.linkedInLabel }} <span class="text-link__icon" aria-hidden="true">{{ content.ui.externalLinkIcon }}</span></a></div>
    </section>

    <section id="contact" class="contact shell">
      <div class="contact__glow" /><div class="section-label">{{ content.sections.contact.label }}</div>
      <div class="contact__layout">
        <div class="contact__content"><p class="eyebrow"><span class="eyebrow__dot" /> {{ content.contact.eyebrow }}</p><h2>{{ content.contact.heading.lead }}<br /><em>{{ content.contact.heading.emphasis }}</em></h2><p class="contact__copy">{{ content.contact.description }}</p></div>
        <div class="contact__form-wrap">
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you" class="contact-form">
            <input type="hidden" name="form-name" value="contact" />
            <p class="sr-only"><label>{{ content.contact.form.honeypotLabel }} <input name="bot-field" tabindex="-1" autocomplete="off" /></label></p>
            <div class="contact-form__grid"><label class="contact-form__label"><span class="contact-form__label-text">{{ content.contact.form.name }}</span><input class="contact-form__control" type="text" name="name" autocomplete="name" :placeholder="content.contact.form.namePlaceholder" required /></label><label class="contact-form__label"><span class="contact-form__label-text">{{ content.contact.form.email }}</span><input class="contact-form__control" type="email" name="email" autocomplete="email" :placeholder="content.contact.form.emailPlaceholder" required /></label></div>
            <label class="contact-form__label"><span class="contact-form__label-text">{{ content.contact.form.topic }}</span><select class="contact-form__control" name="project-type" value=""><option value="" disabled>{{ content.contact.form.topicPlaceholder }}</option><option v-for="option in content.contact.form.topicOptions" :key="option.value" :value="option.value">{{ option.label }}</option></select></label>
            <label class="contact-form__label"><span class="contact-form__label-text">{{ content.contact.form.message }}</span><textarea class="contact-form__control" name="message" rows="4" :placeholder="content.contact.form.messagePlaceholder" required /></label>
            <button class="button button--primary contact-form__submit" type="submit">{{ content.contact.form.submit }} <span class="button__icon" aria-hidden="true">{{ content.ui.externalLinkIcon }}</span></button>
            <p class="contact-form__note">{{ content.contact.form.note }}</p>
          </form>
          <div class="contact__aside"><span class="contact__aside-label">{{ content.contact.socialLabel }}</span><a v-for="link in content.contact.socialLinks" :key="link.label" class="contact__social-link" :href="link.href" target="_blank" rel="noreferrer">{{ link.label }} {{ content.ui.externalLinkIcon }}</a></div>
        </div>
      </div>
    </section>

    <footer class="site-footer shell"><span>&copy; {{ content.footer.copyrightStartYear }}-{{ currentYear }} {{ content.footer.author }}</span><a class="site-footer__link" href="#top">{{ content.footer.backToTop }} {{ content.ui.upArrowIcon }}</a><span>{{ content.footer.siteName }}</span></footer>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useSiteContentStore } from "~/stores/siteContent";

const siteContent = useSiteContentStore();
const content = computed(() => siteContent.data);
const currentYear = new Date().getFullYear();
const socialLinks = computed(() => Object.fromEntries(content.value.contact.socialLinks.map((link) => [link.label.toLowerCase(), link])));

useHead(() => ({
  meta: [
    { property: "og:title", content: content.value.metadata.title },
    { property: "og:description", content: content.value.metadata.openGraphDescription },
    { property: "og:type", content: content.value.metadata.openGraphType },
  ],
}));
</script>
