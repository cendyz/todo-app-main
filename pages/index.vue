<template>
	<Header />
	<main>
		<img src="" alt="" />
		<form @submit.prevent="test">
			<button type="submit"></button>
			<input type="text" v-model="inputData.task" />
			<ul>
				<li>
					<img src="" alt="" />
					<p></p>
					<img src="" alt="" />
				</li>
				<li>
					<img src="" alt="" />
					<p></p>
					<img src="" alt="" />
				</li>
			</ul>
			<div>
				<p>all</p>
				<p>active</p>
				<p>complete</p>
			</div>
			<div>
				<p>dran and drop to reoder list</p>
			</div>
		</form>
	</main>
</template>

<script setup lang="ts">
interface Quest {
	task: string
}

const inputData = ref<Quest>({
	task: '',
})

const test = (): void => {
	console.log(inputData.value.task)
}
</script>

<style lang="scss">
body {
	background-color: #333;
}
</style>
