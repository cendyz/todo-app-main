<template>
	<form @submit.prevent="test" class="z-10 relative">
		<div :class="taskStyles" class="mb-[2rem]">
			<button type="submit">
				<img src="" alt="" aria-label="confrim task" :class="btnStyles" />
			</button>
			<input
				type="text"
				v-model="inputData.task"
				class="block pt-[.3rem] outline-none leading-[0] text-[1.2rem] text-light-gray-500"
				placeholder="Create a new todo..." />
		</div>
		<div class="rounded-xl overflow-hidden">
			<ul>
				<li
					:class="taskStyles"
					v-for="(item, index) in taskData"
					:key="index"
					class="flex items-center rounded-none border-b-[1px] border-b-light-gray-300 py-[1.5rem]">
					<button :class="btnStyles">
						<img src="" alt="" />
					</button>
					<p class="text-[1.2rem] text-light-gray-500 pt-[.4rem]">{{ item }}</p>
					<img :src="x" alt="delete task" class="block ml-auto w-[1.5rem] h-[1.5rem]" />
				</li>
			</ul>
			<div class="bg-light-gray-100 text-[1.2rem] flex justify-between py-[1.7rem] px-[1.7rem] text-light-gray-400">
				<p>5 items left</p>
				<p class="capitalize">clear completed</p>
			</div>
		</div>
		<div
			class="justify-center gap-x-[2rem] capitalize text-[1.5rem] font-w700 mt-[2rem]"
			:class="[taskStyles, which ? 'text-primary-blue' : 'text-light-gray-400']">
			<p>all</p>
			<p>active</p>
			<p>complete</p>
		</div>
		<div
			class="mt-[1rem] py-[4rem] text-center border-2 border-transparent rounded-xl text-light-gray-400 text-[1.4rem]">
			<p>Drag and drop to reoder list</p>
		</div>
	</form>
</template>

<script setup lang="ts">
import x from 'assets/images/icon-cross.svg'
import check from 'assets/images/icon-check.svg'
interface Quest {
	task: string
}

const inputData = ref<Quest>({
	task: '',
})

const test = (): void => {
	console.log(inputData.value.task)
}

const taskData = ref<string[]>([
	'Joq around the park 3x',
	'10 minutes meditation',
	'Read for 1 hour',
	'Pick up groceries',
	'Complete Todo App on Frontend Mentor',
])

const which = ref<boolean>(false)

const btnStyles: string = 'w-[2rem] h-[2rem] mr-[1rem] rounded-full border-[1px] border-light-gray-300'
const taskStyles: string = 'block py-[1.1rem] bg-light-gray-100 flex items-center px-[1.7rem] rounded-lg'
</script>
