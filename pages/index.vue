<template>
	<Header />
	<Main />
</template>

<script setup lang="ts">
import { useToDoStore } from '~/store/toDo'
const store = useToDoStore()

watch(
	() => !store.isLight,
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
</script>

<style lang="scss">
* {
	transition: all 0.3s;
}

.light {
	body {
		background-color: white;
	}
}

.dark {
	body {
		background-color: hsl(235, 21%, 11%);
	}
}
</style>
