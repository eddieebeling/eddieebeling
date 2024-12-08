<template>
	<header class="header">
		<div class="header__intro">
			<img class="header__img" :src="photoUrl" :alt="title" />
			<h1 class="header__name">{{ heading }}</h1>
			<h2 class="header__title">{{ message }}</h2>
		</div>
	</header>
</template>

<script setup>
const heading = ref("Thank You");
const message = ref("I'll be in touch as soon as I check my email.");
const photoUrl = ref("/img/eddie-ebeling-portrait.jpg");

setTimeout(async () => {
	await navigateTo('/')
}, 7500);
</script>
