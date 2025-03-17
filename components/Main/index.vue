<template>
	<main class="px-[2.5rem]">
		<Form />
		<img
			:src="store.isLight ? darkMobile : lightMobile"
			:alt="store.isLight ? 'hall' : 'mountains'"
			class="absolute top-0 left-0 z-0 w-full" />
	</main>
</template>

<script setup lang="ts">
import lightMobile from 'public/img/bg-mobile-light.jpg'
import darkMobile from 'public/img/bg-mobile-dark.jpg'
import { useToDoStore } from '~/store/toDo'

const store = useToDoStore()
</script>

<style scoped lang="scss"></style>
