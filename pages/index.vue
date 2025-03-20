<template>
	<Header />
	<Main />
</template>

<script setup lang="ts">
import { useToDoStore } from '~/store/toDo'
const store = useToDoStore()

const checkTheme = async(): Promise<void> => {
	try {
		if (window.matchMedia('(prefers-color-scheme: light)').matches) {
			document.documentElement.classList.add('light')
			store.isLight = false
		} else {
			document.documentElement.classList.add('dark')
			store.isLight = true
		}
	} catch (error) {
		
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
