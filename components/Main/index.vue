<template>
	<main class="px-[2.5rem]">
		<Form />
		<Transition mode="out-in">
			<img v-if="store.isLight" :src="darkMobile" alt="mountains" class="absolute top-0 left-0 z-0 w-full" />
			<img v-else :src="lightMobile" alt="hall" class="absolute top-0 left-0 z-0 w-full" />
		</Transition>
	</main>
</template>

<script setup lang="ts">
import lightMobile from 'public/img/bg-mobile-light.jpg'
import darkMobile from 'public/img/bg-mobile-dark.jpg'
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
