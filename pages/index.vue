<template>
	<header class="header">
		<div class="header__intro">
			<img class="header__img" :src="photoUrl" :alt="altTitle" />
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
			<nav class="header__theme-toggle">
				<button @click="toggleTheme('light')" class="header__theme-button light">
					<span class="sr-only">Switch to light theme</span>
				</button>
				<button @click="toggleTheme('dark')" class="header__theme-button dark">
					<span class="sr-only">Switch to dark theme</span>
				</button>
				<button @click="toggleTheme('contrast')" class="header__theme-button contrast">
					<span class="sr-only">Switch to high contrast theme</span>
				</button>
			</nav>
			<dialog ref="dialog" class="dialog">
				<font-awesome :icon="faXmark" @click="closeDialog" class="dialog__close" />
				<form method="POST" action="/thank-you" data-netlify="true" name="contact" class="dialog__form">
					<h2 class="dialog__title">Let's chat...</h2>
					<label for="name" class="dialog__label">
						<span>Name</span>
						<input type="text" id="name" name="name" autocomplete="name" required />
					</label>
					<label for="email" class="dialog__label">
						<span>Email</span>
						<input type="email" id="email" name="email" autocomplete="email" required />
					</label>
					<label for="message" class="dialog__label">
						<span>Message</span>
						<textarea id="message" name="message" required></textarea>
					</label>
					<div>
						<button type="submit">Send</button>
					</div>
				</form>
			</dialog>
		</div>
	</header>
</template>

<script setup>
import { ref } from "vue";
import {
	faGithub,
	faCodepen,
	faLinkedin,
	faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const name = ref("Eddie Ebeling");
const title = ref("UI/UX and Front End Developer");
const altTitle = ref("Eddie Ebeling - UI/UX and Front End Developer");
const photoUrl = ref("https://res.cloudinary.com/eddieebeling/image/upload/v1767195944/eddie-ebeling-portrait-1:1.jpg");
const socialLinks = ref([
	{ platform: "Instagram", url: "https://instagram.com/eddieebeling" },
	{ platform: "Linkedin", url: "https://linkedin.com/in/eddieebeling" },
	{ platform: "Github", url: "https://github.com/eddieebeling" },
	{ platform: "Codepen", url: "https://codepen.io/eddieebeling" },
]);
const emit = defineEmits(['notifyApp'])

const dialog = ref(null);
const openDialog = () => dialog.value.showModal();
const closeDialog = () => dialog.value.close();

const toggleTheme = (theme) => {
	emit('notifyApp', theme)
};
</script>
