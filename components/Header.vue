<template>
	<header class="px-[2.5rem] py-[5rem] flex justify-between items-center">
		<h1 class="uppercase text-light-gray-100 font-w700 text-[2.4rem] tracking-[1.3rem] leading-[0] pt-[.7rem]">todo</h1>
		<img :src="isLight ? sun : moon" :alt="isLight ? 'light theme' : 'dark theme'" class="block w-[2rem] h-[2rem]" />
	</header>
</template>

<script setup lang="ts">
import moon from 'assets/images/icon-moon.svg'
import sun from 'assets/images/icon-sun.svg'

const isLight = ref(false)
</script>

<style scoped></style>
