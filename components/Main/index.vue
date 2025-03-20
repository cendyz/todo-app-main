<template>
	<main class="px-[2.5rem] lg:w-[70rem] lg:mx-auto container">
		<Form />
		<Transition mode="out-in">
			<picture v-if="store.isLight">
				<source :srcset="darkDesktop" media="(min-width: 1024px)" />
				<img :src="darkMobile" alt="mountains" class="absolute top-0 left-0 z-0 w-full" />
			</picture>
			<picture v-else>
				<source :srcset="lightDesk" media="(min-width: 1024px)" />
				<img :src="lightMobile" alt="hall" class="absolute top-0 left-0 z-0 w-full" />
			</picture>
		</Transition>
	</main>
</template>

<script setup lang="ts">
import lightMobile from 'public/img/bg-mobile-light.jpg'
import darkMobile from 'public/img/bg-mobile-dark.jpg'
import darkDesktop from 'public/img/bg-desktop-dark.jpg'
import lightDesk from 'public/img/bg-desktop-light.jpg'
import { useToDoStore } from '~/store/toDo'

const store = useToDoStore()
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
	transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
