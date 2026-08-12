<script setup lang="ts">
const capabilities = [
  "Front-end architecture",
  "Design token systems",
  "Product & app design",
  "Rapid prototyping",
  "Web accessibility",
];

const roles = [
  { years: "2021 — now", role: "Senior Software Engineer", company: "Dot Foods", detail: "Scalable web applications, front-end architecture, and product-minded engineering." },
  { years: "2021", role: "Senior Front-End Developer", company: "Dot Foods", detail: "Front-end development and user experience for cross-platform digital products." },
  { years: "2018 — 2021", role: "Senior UX Developer", company: "BUNN", detail: "User experience, interface systems, and development for connected product experiences." },
  { years: "2017 — 2018", role: "Senior Software Engineer", company: "Allscripts", detail: "Software engineering for healthcare products and internal platforms." },
  { years: "2015 — 2017", role: "Senior UI/UX Developer", company: "H. D. Smith", detail: "UI/UX development, front-end architecture, and design system thinking." },
  { years: "2010 — 2015", role: "Web Developer, LRS Web Solutions", company: "Levi, Ray & Shoup", detail: "Web development, client solutions, and cross-platform digital experiences." },
];

useHead({
  meta: [
    { property: "og:title", content: "Eddie Ebeling — Creative Technologist" },
    { property: "og:description", content: "Front-end developer and product-minded creative technologist." },
    { property: "og:type", content: "website" },
  ],
});
</script>

<template>
  <main>
    <nav class="nav shell" aria-label="Primary navigation">
      <a class="wordmark" href="#top" aria-label="Eddie Ebeling home"><span class="wordmark-mark">EE</span><span>EDDIE EBELING</span></a>
      <div class="nav-links"><a href="#about">About</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
      <a class="nav-cta" href="https://www.linkedin.com/in/eddieebeling/" target="_blank" rel="noreferrer">Connect <span aria-hidden="true">↗</span></a>
    </nav>

    <section id="top" class="hero shell">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-dot" /> Creative technologist · Scottsdale, AZ</p>
        <h1>I make digital work feel <em>clear.</em></h1>
        <p class="hero-intro">I&apos;m Eddie — a front-end developer and product-minded creative who turns complex ideas into thoughtful, usable experiences across web and mobile.</p>
        <div class="hero-actions"><a class="button button-primary" href="#experience">View my experience <span aria-hidden="true">↓</span></a><a class="text-link" href="https://github.com/eddieebeling" target="_blank" rel="noreferrer">View GitHub <span aria-hidden="true">↗</span></a></div>
        <div class="hero-note"><span class="line" /><span>Currently creating at <strong>Dot Foods</strong></span></div>
      </div>
      <div class="hero-visual" aria-label="Portrait of Eddie Ebeling">
        <div class="visual-orbit orbit-one" /><div class="visual-orbit orbit-two" />
        <div class="portrait-frame"><img src="/eddie-ebeling.jpg" alt="Eddie Ebeling" class="portrait" /></div>
        <div class="visual-stamp"><span>01</span><span>THINK<br />MAKE<br />REFINE</span></div>
        <div class="visual-caption">A little curious.<br />A lot intentional.</div>
      </div>
    </section>

    <div class="capability-strip" aria-label="Capabilities"><div class="capability-track"><span v-for="(capability, index) in [...capabilities, ...capabilities]" :key="`${capability}-${index}`"><i />{{ capability }}</span></div></div>

    <section id="about" class="about shell">
      <div class="section-label">01 / A little about me</div>
      <div class="about-grid"><h2>Good work lives at the intersection of <span>ideas</span> and execution.</h2><div class="about-copy"><p>My sweet spot is the space between a bold idea and the moment it becomes real. I bring a background in front-end development, user experience, and product design to help teams move from “what if?” to “what&apos;s next?”</p><p>I&apos;m happiest when I&apos;m making the complicated feel approachable — whether that means shaping a design system, prototyping a new flow, or getting a polished experience across the finish line.</p><a class="text-link" href="https://www.linkedin.com/in/eddieebeling/" target="_blank" rel="noreferrer">More on LinkedIn <span aria-hidden="true">↗</span></a></div></div>
    </section>

    <section id="experience" class="career shell">
      <div class="section-label">02 / Experience snapshot</div>
      <div class="career-heading"><h2>A career spent making the <span>web useful.</span></h2><div class="career-meta"><strong>Senior Software Engineer<br />&amp; Front-End Developer</strong><span>Currently at Dot Foods<br />Scottsdale, Arizona</span></div></div>
      <div class="role-list"><article v-for="item in roles" :key="`${item.company}-${item.years}`" class="role-row"><span class="role-years">{{ item.years }}</span><div class="role-main"><h3>{{ item.role }}</h3><p>{{ item.detail }}</p></div><span class="role-company">{{ item.company }}</span></article></div>
      <div class="career-footer"><span>More detail, recommendations, and credentials</span><a class="text-link" href="https://www.linkedin.com/in/eddieebeling/" target="_blank" rel="noreferrer">View LinkedIn profile <span aria-hidden="true">↗</span></a></div>
    </section>

    <section id="contact" class="contact shell">
      <div class="contact-glow" /><div class="section-label">03 / Let&apos;s make something</div>
      <div class="contact-layout">
        <div class="contact-content"><p class="eyebrow"><span class="eyebrow-dot" /> Open to good conversations</p><h2>Have a good<br /><em>question?</em></h2><p class="contact-copy">Tell me a little about what you&apos;re working on, what you&apos;re curious about, or where you&apos;re stuck. I&apos;ll get back to you as soon as I can.</p></div>
        <div class="contact-form-wrap">
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/#contact" class="contact-form">
            <input type="hidden" name="form-name" value="contact" />
            <p class="sr-only"><label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" tabindex="-1" autocomplete="off" /></label></p>
            <div class="form-grid"><label><span>Name</span><input type="text" name="name" autocomplete="name" placeholder="Your name" required /></label><label><span>Email</span><input type="email" name="email" autocomplete="email" placeholder="you@example.com" required /></label></div>
            <label><span>What can I help with?</span><select name="project-type" value=""><option value="" disabled>Select a topic</option><option value="new-project">A new project</option><option value="product-ux">Product or UX thinking</option><option value="front-end">Front-end development</option><option value="just-saying-hi">Just saying hi</option></select></label>
            <label><span>Message</span><textarea name="message" rows="4" placeholder="A few words to get us started..." required /></label>
            <button class="button button-light form-submit" type="submit">Send message <span aria-hidden="true">↗</span></button>
            <p class="form-note">Your message will be sent securely through Netlify Forms.</p>
          </form>
          <div class="contact-aside"><span>Elsewhere</span><a href="https://github.com/eddieebeling" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/eddieebeling/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.instagram.com/eddieebeling" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.facebook.com/eddieebeling" target="_blank" rel="noreferrer">Facebook ↗</a><a href="https://codepen.io/eddieebeling" target="_blank" rel="noreferrer">CodePen ↗</a></div>
        </div>
      </div>
    </section>

    <footer class="footer shell"><span>© {{ new Date().getFullYear() }} Eddie Ebeling</span><a href="#top">Back to top ↑</a><span>eddieebeling.com</span></footer>
  </main>
</template>
