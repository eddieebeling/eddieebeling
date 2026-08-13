<template>
  <main class="thank-you">
    <SiteHeader />
    <section class="thank-you__content shell">
      <p class="eyebrow"><span class="eyebrow__dot" /> Message received</p>
      <h1>Thanks for reaching <em>out.</em></h1>
      <p>I&apos;ll get back to you as soon as I can.</p>
      <a class="button button--primary" href="/">Back to portfolio <span class="button__icon" aria-hidden="true">↗︎</span></a>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: "Thanks — Eddie Ebeling",
  meta: [{ name: "description", content: "Your message was sent to Eddie Ebeling." }],
});
</script>
