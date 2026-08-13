<template>
  <main>
    <SiteHeader />

    <section id="top" class="hero shell">
      <div class="hero__copy">
        <p class="eyebrow"><span class="eyebrow__dot" /> Senior software engineer · Scottsdale, AZ</p>
        <h1>I build digital experiences that scale <em>beautifully.</em></h1>
        <p class="hero__intro">I&apos;m Eddie — a Creative Technologist and Front End Developer specializing in cross-platform and multi-device web development using HTML, CSS, and JavaScript.</p>
        <div class="hero__actions"><a class="button button--primary" href="#experience">See my experience <span class="button__icon" aria-hidden="true">↓︎</span></a><a class="text-link" href="https://github.com/eddieebeling" target="_blank" rel="noreferrer">View GitHub <span class="text-link__icon" aria-hidden="true">↗︎</span></a></div>
      <div class="hero__note"><span class="hero__line" /><span>Currently a Senior Software Engineer at <strong>Dot Foods</strong> · Mount Sterling, IL</span></div>
      </div>
      <div class="hero__visual" aria-label="Portrait of Eddie Ebeling">
        <div class="hero__orbit hero__orbit--one" /><div class="hero__orbit hero__orbit--two" />
        <div class="hero__portrait-frame"><img src="/eddie-ebeling.jpg" alt="Eddie Ebeling" class="hero__portrait" /></div>
        <div class="hero__stamp"><span>01</span><span>DISCOVER<br />DESIGN<br />DELIVER</span></div>
        <div class="hero__caption">A little curious.<br />A lot intentional.</div>
      </div>
    </section>

    <div class="capabilities" aria-label="Capabilities"><div class="capabilities__track"><span class="capabilities__item" v-for="(capability, index) in [...capabilities, ...capabilities]" :key="`${capability}-${index}`"><i class="capabilities__marker" />{{ capability }}</span></div></div>

    <section id="about" class="about shell">
      <div class="section-label">01 / A little about me</div>
      <div class="about__grid"><h2>I bring product thinking and front-end craft together.</h2><div class="about__copy"><p>I&apos;m a senior software engineer and front-end developer with a background in product development, UX, and interface systems. I like working where product thinking meets implementation—understanding the problem, shaping the experience, and building the details that bring it to life.</p><p>I care about accessibility, collaboration, and finding clear solutions that work for both the people using them and the teams building them.</p><a class="text-link" href="https://www.linkedin.com/in/eddieebeling/" target="_blank" rel="noreferrer">More on LinkedIn <span class="text-link__icon" aria-hidden="true">↗︎</span></a></div></div>
    </section>

    <section id="technologies" class="technologies shell">
      <div class="section-label">02 / Preferred technologies</div>
      <div class="technologies__heading"><h2>A <span>Vue-first</span> toolkit for thoughtful digital products.</h2><p>I use these tools to bring digital experiences from concept to production, shaping everything from design systems and interfaces to accessible, maintainable code.</p></div>
      <div class="technologies__list" aria-label="Preferred technologies"><span class="technologies__item" v-for="(technology, index) in technologies" :key="technology"><small class="technologies__index">{{ String(index + 1).padStart(2, &apos;0&apos;) }}</small>{{ technology }}</span></div>
    </section>

    <section id="experience" class="career shell">
      <div class="section-label">03 / Experience snapshot</div>
        <div class="career__heading"><h2>A career turning ideas into <span> experiences.</span></h2><div class="career__meta"><strong>Senior Software Engineer<br />&amp; Front-End Developer</strong><span>Currently at Dot Foods<br />Mount Sterling, IL</span></div></div>
      <div class="career__list"><article v-for="item in roles" :key="`${item.company}-${item.years}`" class="career__row"><span class="career__years">{{ item.years }}</span><div class="career__main"><h3>{{ item.role }}</h3><p>{{ item.detail }}</p></div><span class="career__company">{{ item.company }}</span></article></div>
      <div class="career__footer"><span>More detail, recommendations, and credentials</span><a class="text-link" href="https://www.linkedin.com/in/eddieebeling/" target="_blank" rel="noreferrer">View LinkedIn profile <span class="text-link__icon" aria-hidden="true">↗︎</span></a></div>
    </section>

    <section id="contact" class="contact shell">
      <div class="contact__glow" /><div class="section-label">04 / Let&apos;s make something</div>
      <div class="contact__layout">
        <div class="contact__content"><p class="eyebrow"><span class="eyebrow__dot" /> Open to thoughtful conversations</p><h2>Let&apos;s talk about<br /><em>whatever.</em></h2><p class="contact__copy">Whether you&apos;re hiring, building something new, or looking for a thoughtful front-end partner, I&apos;d love to hear what you&apos;re working on.</p></div>
        <div class="contact__form-wrap">
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you" class="contact-form">
            <input type="hidden" name="form-name" value="contact" />
            <p class="sr-only"><label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" tabindex="-1" autocomplete="off" /></label></p>
            <div class="contact-form__grid"><label class="contact-form__label"><span class="contact-form__label-text">Name</span><input class="contact-form__control" type="text" name="name" autocomplete="name" placeholder="Your name" required /></label><label class="contact-form__label"><span class="contact-form__label-text">Email</span><input class="contact-form__control" type="email" name="email" autocomplete="email" placeholder="you@example.com" required /></label></div>
            <label class="contact-form__label"><span class="contact-form__label-text">What are you working on?</span><select class="contact-form__control" name="project-type" value=""><option value="" disabled>Select a topic</option><option value="new-project">A new project</option><option value="design-systems">Design Systems</option><option value="product-ux">Product or UX thinking</option><option value="front-end">Front-end development</option><option value="just-saying-hi">Just saying hi</option></select></label>
            <label class="contact-form__label"><span class="contact-form__label-text">Message</span><textarea class="contact-form__control" name="message" rows="4" placeholder="A few words to get us started..." required /></label>
            <button class="button button--primary contact-form__submit" type="submit">Send message <span class="button__icon" aria-hidden="true">↗︎</span></button>
            <p class="contact-form__note">Your message will be sent securely through Netlify Forms.</p>
          </form>
          <div class="contact__aside"><span class="contact__aside-label">Elsewhere</span><a class="contact__social-link" href="https://github.com/eddieebeling" target="_blank" rel="noreferrer">GitHub ↗︎</a><a class="contact__social-link" href="https://www.linkedin.com/in/eddieebeling/" target="_blank" rel="noreferrer">LinkedIn ↗︎</a><a class="contact__social-link" href="https://www.instagram.com/eddieebeling" target="_blank" rel="noreferrer">Instagram ↗︎</a><a class="contact__social-link" href="https://www.facebook.com/eddieebeling" target="_blank" rel="noreferrer">Facebook ↗︎</a><a class="contact__social-link" href="https://codepen.io/eddieebeling" target="_blank" rel="noreferrer">CodePen ↗︎</a></div>
        </div>
      </div>
    </section>

    <footer class="site-footer shell"><span>&copy; 2010-{{ new Date().getFullYear() }} Eddie Ebeling</span><a class="site-footer__link" href="#top">Back to top ↑</a><span>eddieebeling.com</span></footer>
  </main>
</template>

<script setup>
const capabilities = [
  "Front-end architecture",
  "Design token systems",
  "Product & app design",
  "Rapid prototyping",
  "Web accessibility",
];

const technologies = [
  "Vue",
  "Nuxt",
  "Pinia",
  "Vite",
  "Netlify",
  "Style Dictionary",
  "Codex",
  "Figma",
  "Claude Design"
];

const roles = [
  { years: "2021 — now", role: "Senior Software Engineer", company: "Dot Foods", detail: "Scalable web applications, front-end architecture, and product-minded engineering with Optimizely DXP." },
  { years: "2018 — 2021", role: "Senior UX Developer", company: "BUNN", detail: "IoT-connected products, UX strategy, interface design, and implementation for digital product experiences." },
  { years: "2017 — 2018", role: "Senior Software Engineer", company: "Allscripts", detail: "Developed software for healthcare workflows with an emphasis on usability and reliability." },
  { years: "2015 — 2017", role: "Senior UI/UX Developer", company: "H. D. Smith", detail: "Designed and developed ecommerce experiences, contributed to mobile development, and established front-end architecture and reusable UI patterns." },
  { years: "2010 — 2015", role: "Web Developer, LRS Web Solutions", company: "Levi, Ray & Shoup", detail: "Built client-facing web solutions across design, development, and delivery." },
];

useHead({
  meta: [
    { property: "og:title", content: "Eddie Ebeling — Creative Technologist" },
    { property: "og:description", content: "Senior software engineer and front-end developer building clear, accessible digital experiences." },
    { property: "og:type", content: "website" },
  ],
});
</script>
