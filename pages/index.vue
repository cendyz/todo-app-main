<template>
	<Header />
	<Main />
</template>

<script setup lang="ts">
import { useToDoStore } from '~/store/toDo'
const store = useToDoStore()

const checkTheme = (): void => {
	if (window.matchMedia('(prefers-color-scheme: light)').matches) {
		document.documentElement.classList.add('light')
		store.isLight = false
	} else {
		document.documentElement.classList.add('dark')
		store.isLight = true
	}
}

watch(
	() => store.isLight,
	newValue => {
		if (newValue) {
			document.documentElement.classList.add('dark')
			document.documentElement.classList.remove('light')
		} else {
			document.documentElement.classList.add('light')
			document.documentElement.classList.remove('dark')
		}
	}
)

onMounted(() => {
	checkTheme()
})

const func = (p0: number, percent: number, aug: number, p: number): number => {
	return 1
}
</script>

<style lang="scss">
* {
	transition: all 0.3s;
}

.light {
	body {
		background-color: hsl(236, 33%, 92%);
	}
}

.dark {
	body {
		background-color: hsl(235, 21%, 11%);
	}
}
</style>
