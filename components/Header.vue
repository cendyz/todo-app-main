<template>
	<header
		class="px-[2.5rem] py-[5rem] flex justify-between items-center relative z-10 container lg:w-[70rem] lg:pt-[9rem]">
		<h1
			class="uppercase text-light-gray-100 font-w700 text-[2.6rem] tracking-[1rem] leading-[0] pt-[.7rem] lg:text-[4rem]">
			todo
		</h1>

		<button v-if="!store.isLight" @click="store.isLight = true">
			<img :src="sun" alt="light theme'" :class="themeIconStyles" />
		</button>
		<button v-else @click="store.isLight = false">
			<img :src="moon" alt="dark theme" :class="themeIconStyles" />
		</button>
	</header>
</template>

<script setup lang="ts">
import { useToDoStore } from '~/store/toDo'
import moon from 'assets/images/icon-moon.svg'
import sun from 'assets/images/icon-sun.svg'

const store = useToDoStore()

const themeIconStyles = ref<string>('block w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem]')
</script>
