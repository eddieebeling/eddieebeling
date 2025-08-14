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
			href: "/css/_variables.css",
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
// CSS Custom Properties
:root {
	--ring-offset-shadow: 0 0 #0000;
	--ring-shadow: 0 0 #0000;
	--shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

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

// Typography (composite tokens)
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
	color: var(--ee-theme-color-content-brand);
	background: var(--ee-theme-color-background-subtle);
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
	padding: 0 1rem;

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
		margin: 0 -0.8rem;
		height: 60px;

		a {
			color: var(--ee-theme-color-icon-default);
			padding: 1rem;
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
			color: var(--ee-theme-color-content-brand);
			margin: 0;
		}
	}

	&__title {
		font-size: 1.125rem;
		font-weight: 300;
		line-height: 1.2;
		margin: 0;
		color: var(--ee-theme-color-content-subtle);
		text-align: center;

		@media (min-width: $ee-bp-lg) {
			font-size: 1.625rem;
		}
	}
}

.section {
	padding: 1rem 0;

	&__cta {
		background: var(--ee-theme-button-color-background-default);
		color: var(--ee-theme-button-color-content-default);
		border: none;
		padding: size(2) size(4);
		font-size: 1.125rem;
		font-weight: 800;
		margin: 1rem 0;
		cursor: pointer;
		transition: all 0.2s linear;
		border: solid var(--ee-theme-border-width-md) var(--ee-theme-button-color-border-default);
		border-radius: var(--ee-theme-border-radius-md);

		&::after {
			content: "😀";
			margin-left: 0.5rem;
			font-size: 1.25rem;
		}

		&:hover {
			background: var(--ee-theme-button-color-background-hover);
			border: solid 2px var(--ee-theme-button-color-border-hover);
			color: white;

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

@media (prefers-color-scheme: dark) {
	body {
		background: var(--ee-theme-color-background-brand-knockout);
	}

	.section {
		&__cta {
			background: var(--ee-theme-button-primary-color-background-default);
			border: solid 2px var(--ee-theme-button-primary-color-border-default);
			color: var(--ee-theme-button-primary-color-content-default);

			&:hover {
				background: var(--ee-theme-button-primary-color-background-hover);
				border: solid 2px var(--ee-theme-button-primary-color-border-hover);
				color: white;
			}
		}
	}

	.header {
		h1 {
			color: var(--ee-theme-color-content-knockout);
		}

		h2 {
			color: var(--ee-theme-color-content-subtle);
		}

		&__social-links {
			a {
				color: var(--ee-theme-color-icon-brand);
			}

			a:hover {
				color: var(--ee-theme-color-icon-brand-hover);
			}
		}
	}

	.dialog {
		&__form {
			background: var(--ee-color-neutral-black) !important;
			color: var(--ee-theme-color-content-subtle);

			input,
			textarea {
				background: var(--ee-color-neutral-900);
				color: var(--ee-color-neutral-300);
				border: solid 1px var(--ee-color-neutral-800);
			}
		}

		&__label {
			span {
				color: var(--ee-theme-color-content-subtle)
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
		color: var(--ee-theme-color-icon-subtle);
		transition: all 0.2s linear;
		z-index: 999;

		&:hover {
			color: var(--ee-theme-color-icon-knockout);
		}
	}

	&__title {
		@include ee-theme-typography-headline();
		& {
			color: var(--ee-theme-color-content-brand);
			margin-top: 0.5rem;
			margin-bottom: 0;
		}
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
		background: var(--ee-theme-color-background);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		margin: 0 auto;
		position: relative;

		span {
			font-size: 0.875rem;
			margin-bottom: 0.25rem;
			color: var(--ee-theme-color-content-subtle);
		}

		input,
		textarea {
			padding: 0.8125rem 1rem;
			border: 1px solid var(--ee-theme-color-border-default);
			border-radius: 0.25rem;
		}

		textarea {
			resize: none;
			height: 100px;
			font-family: var(--ee-typography-font-family-montserrat);
		}

		button {
			background: var(--ee-theme-button-primary-color-background-default);
			color: var(--ee-theme-button-primary-color-content-default);
			border: none;
			padding: size(2) size(4);
			font-size: 1.125rem;
			font-weight: 800;
			margin: 0.5rem 0 0 0;
			cursor: pointer;
			transition: all 0.2s linear;
			border-radius: var(--ee-theme-border-radius-md);
			width: 100%;
			border: solid  var(--ee-theme-border-width-md) var(--ee-theme-button-primary-color-border-default);

			&:hover {
				background: var(--ee-theme-button-primary-color-background-hover);
				color: white;
			}
		}
	}
}

/*   Open state of the dialog  */
dialog[open] {
	opacity: 1;
	transform: scaleY(1);
	padding: 0;
	border: none;
	box-shadow: var(--ring-offset-shadow, 0 0 #0000), var(--ring-shadow, 0 0 #0000), var(--shadow);
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