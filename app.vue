<template>
	<main>
		<NuxtPage />
		<figure class="portrait">
			<img class="portrait__img" :src="photoUrl" :alt="`${name} ${title}`" />
			<figcaption class="sr-only">{{ name }} is a {{ bio }}</figcaption>
		</figure>
	</main>
</template>

<script setup>
import { ref } from "vue";

const name = ref("Eddie Ebeling");
const title = ref("UI/UX and Front End Developer");
const bio = ref(
	"Creative Technologist and Front End Developer specializing in cross-platform and multi-device web development using HTML, CSS, and JavaScript. Has a strong focus in user experience design and development for mobile and web-based applications."
);
const photoUrl = ref("/img/eddie-ebeling-portrait.jpg");

useHead({
	title: name.value + " | " + title.value,
	link: [
		{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;800&display=swap",
		},
		{
			rel: "stylesheet",
			href: "/css/light/_variables.css",
			"data-theme": "tokens",
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
</script>

<style lang="scss">
// Sizing
@function size($number) {
	@return calc(0.5rem * #{$number})
}

// Breakpoints
$ee-bp-sm: 23.4375rem; // 375px
$ee-bp-md: 48rem; // 768px
$ee-bp-lg: 60rem; // 960px
$ee-bp-xl: 75rem; // 1200px
$ee-bp-xxl: 87.5rem; // 1600px

// typography/display-default
@mixin ee-theme-typography-display-default() {
    font-family: var(--ee-theme-typography-display-default-mobile-font-family);
    font-weight: var(--ee-theme-typography-display-default-mobile-font-weight);
    font-size: var(--ee-theme-typography-display-default-mobile-font-size);
    line-height: var(--ee-theme-typography-display-default-mobile-line-height);
    letter-spacing: var(--ee-theme-typography-display-default-mobile-letter-spacing);
    text-transform: var(--ee-theme-typography-display-default-mobile-text-transform);

  @media all and (min-width: $ee-bp-lg) {
      font-family: var(--ee-theme-typography-display-default-font-family);
      font-weight: var(--ee-theme-typography-display-default-font-weight);
      font-size: var(--ee-theme-typography-display-default-font-size);
      line-height: var(--ee-theme-typography-display-default-line-height);
      letter-spacing: var(--ee-theme-typography-display-default-letter-spacing);
      text-transform: var(--ee-theme-typography-display-default-text-transform);
  }
}

// typography/headline
@mixin ee-theme-typography-headline() {
	font-family: var(--ee-theme-typography-headline-mobile-font-family);
	font-weight: var(--ee-theme-typography-headline-mobile-font-weight);
	font-size: var(--ee-theme-typography-headline-mobile-font-size);
	line-height: var(--ee-theme-typography-headline-mobile-line-height);
	letter-spacing: var(--ee-theme-typography-headline-mobile-letter-spacing);
	text-transform: var(--ee-theme-typography-headline-mobile-text-transform);

	@media all and (min-width: $ee-bp-lg) {
		font-family: var(--ee-theme-typography-headline-font-family);
		font-weight: var(--ee-theme-typography-headline-font-weight);
		font-size: var(--ee-theme-typography-headline-font-size);
		line-height: var(--ee-theme-typography-headline-line-height);
		letter-spacing: var(--ee-theme-typography-headline-letter-spacing);
		text-transform: var(--ee-theme-typography-headline-text-transform);
	}
}

// typography/title
@mixin ee-theme-typography-title() {
	font-family: var(--ee-theme-typography-title-mobile-font-family);
	font-weight: var(--ee-theme-typography-title-mobile-font-weight);
	font-size: var(--ee-theme-typography-title-mobile-font-size);
	line-height: var(--ee-theme-typography-title-mobile-line-height);
	letter-spacing: var(--ee-theme-typography-title-mobile-letter-spacing);
	text-transform: var(--ee-theme-typography-title-mobile-text-transform);

	@media all and (min-width: $ee-bp-lg) {
		font-family: var(--ee-theme-typography-title-font-family);
		font-weight: var(--ee-theme-typography-title-font-weight);
		font-size: var(--ee-theme-typography-title-font-size);
		line-height: var(--ee-theme-typography-title-line-height);
		letter-spacing: var(--ee-theme-typography-title-letter-spacing);
		text-transform: var(--ee-theme-typography-title-text-transform);
	}
}

// Keyframes
@keyframes fadein {
	from { opacity: 0; }
	to { opacity: 1; }
}

* { box-sizing: border-box; }

html,
body {
	font-family: var(--ee-typography-font-family-montserrat);
	font-weight: 400;
	height: 100%;
	padding: 0;
	margin: 0;
	color: var(--ee-theme-color-content-default);
	background: var(--ee-theme-color-background-default);
}

.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	border: 0;
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
	align-items: center;;
	padding: 0 size(2);

	@media (min-width: $ee-bp-lg) {
		width: 55%;
	}

	&__intro {
		text-decoration: none;
		display: flex;
		flex-direction: column;
		align-items: center;

		@media (min-width: $ee-bp-lg) {
			align-items: flex-start;
		}
	}

	&__img {
		width: 240px;
		height: 360px;
		clip-path: circle(30% at 50% 35%);
		margin-bottom: -116px;

		@media (min-width: $ee-bp-lg) {
			display: none;
		}
	}

	&__social-links {
		display: flex;
		align-items: center;
		font-size: 1.5rem;
		margin: 0 -1rem;

		a {
			color: var(--ee-theme-color-icon-default);
			padding: size(2);
			animation: fadein 0.5s;
			transition: all 0.2s linear;
			text-decoration: none;
		}

		a:hover {
			color: var(--ee-theme-color-icon-default-hover);
			transform: scale(1.12);
		}
	}

	&__name {
		@include ee-theme-typography-display-default();
		& {
			color: var(--ee-theme-color-content-default);
			margin: 0;
		}
	}

	&__title {
		@include ee-theme-typography-title();
		& {
			margin: 0;
			color: var(--ee-theme-color-content-subtle);
			text-align: center;
		}
	}
}

.section {
	padding: size(3) 0;

	&__cta {
		background: var(--ee-theme-button-color-background-default);
		color: var(--ee-theme-button-color-content-default);
		padding: size(2) size(4);
		font-size: 1.125rem;
		font-weight: 800;
		cursor: pointer;
		transition: all 0.2s linear;
		border: solid var(--ee-theme-border-width-md) var(--ee-theme-button-color-border-default);
		border-radius: var(--ee-theme-border-radius-md);

		&::after {
			content: "😀";
			margin-left: size(1);
			font-size: 1.25rem;
		}

		&:hover {
			background: var(--ee-theme-button-color-background-hover);
			border: solid 2px var(--ee-theme-button-color-border-hover);
			color: var(--ee-theme-button-color-content-hover);

			&::after {
				content: "😉";
			}
		}
	}
}

.portrait {
	height: 100%;
	width: 45%;
	margin: 0;
	animation: fadein 0.5s;
	display: none;
	position: relative;

	@media (min-width: $ee-bp-lg) {
		display: flex;
	}

	&__img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
}

/* Dialog Styles */
.dialog {
	min-width: 375px;
	max-width: 375px;

	&__close {
		position: absolute;
		top: size(3);
		right: size(3);
		font-size: 1.5rem;
		cursor: pointer;
		color: var(--ee-theme-color-icon-default);
		transition: all 0.2s linear;
		z-index: var(--ee-z-index-500);

		&:hover {
			color: var(--ee-theme-color-icon-default-hover);
		}
	}

	&__title {
		@include ee-theme-typography-headline();
		& {
			color: var(--ee-theme-color-content-default);
			margin-top: size(1);
			margin-bottom: size(0);
		}
	}

	&__label {
		display: flex;
		flex-direction: column;
	}

	&__form {
		display: flex;
		flex-direction: column;
		gap: size(2);
		padding: size(4) size(6) size(6) size(6);
		background: var(--ee-theme-color-background-default);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		margin: 0 auto;
		position: relative;

		span {
			font-size: 0.875rem;
			margin-bottom: size(1);
			color: var(--ee-theme-color-content-subtle);
		}

		input,
		textarea {
			padding: size(1.75) size(2);
			border: solid var(--ee-theme-border-width-sm) var(--ee-theme-color-border-default);
			border-radius: var(--ee-theme-border-radius-md);
		}

		textarea {
			resize: none;
			height: 100px;
			font-family: var(--ee-typography-font-family-montserrat);
		}

		button {
			background: var(--ee-theme-button-color-background-knockout);
			color: var(--ee-theme-button-color-content-knockout);
			padding: size(2) size(4);
			font-size: 1.125rem;
			font-weight: 800;
			margin: size(1) 0;
			cursor: pointer;
			transition: all 0.2s linear;
			border-radius: var(--ee-theme-border-radius-md);
			width: 100%;
			border: solid var(--ee-theme-border-width-md) var(--ee-theme-button-color-border-default);
			border-radius: var(--ee-theme-border-radius-md);

			&:hover {
				background: var(--ee-theme-button-color-background-knockout-hover);
				color: var(--ee-theme-button-color-content-knockout-hover);
				outline: 2px solid var(--ee-color-neutral-600);
				outline-offset: 2px;
			}
		}
	}
}

/*   Open state of the dialog  */
dialog[open] {
	opacity: 1;
	transform: scaleY(1);
	padding: size(0);
	box-shadow: var(--ee-theme-box-shadow-md);
	border:none;
}

/*   Closed state of the dialog   */
dialog {
	opacity: 0;
	transform: scaleY(0);
	transition: opacity 0.2s ease-out, transform 0.2s ease-out,
		overlay 0.2s ease-out allow-discrete, display 0.2s ease-out allow-discrete;
	padding: 0;
}

/*   Before-open state  */
@starting-style {
	dialog[open] {
		opacity: 0;
		transform: scaleY(0);
	}
}

/* Transition the :backdrop when the dialog modal is promoted to the top layer */
dialog::backdrop {
	background-color: var(--ee-theme-color-background-overlay-light);
	transition: display 0.2s allow-discrete, overlay 0.2s allow-discrete,
	background-color 0.2s;
}

dialog[open]::backdrop {
	background-color: var(--ee-theme-color-background-overlay-dark);
}

/* This starting-style rule cannot be nested inside the above selector
because the nesting selector cannot represent pseudo-elements. */
@starting-style {
	dialog[open]::backdrop {
		background-color: var(--ee-theme-color-background-overlay-light);
	}
}
</style>