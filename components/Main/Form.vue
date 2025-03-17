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
					<button
						:class="[
							btnStyles,
							isCompleted == index && 'bg-gradient-to-br from-primary-from to-primary-to border-none',
						]"
						class="flex justify-center items-center">
						<img
							:src="isCompleted == index ? check : ''"
							alt=""
							:class="isCompleted == index ? 'w-[.8rem] h-[.8rem]' : ''" />
					</button>
					<p class="text-[1.2rem] text-light-gray-500 pt-[.4rem]" :class="isCompleted == index ? 'line-through' : ''">
						{{ item }}
					</p>
					<img :src="x" alt="delete task" class="block ml-auto w-[1.5rem] h-[1.5rem]" />
				</li>
			</ul>
			<div class="bg-light-gray-100 text-[1.2rem] flex justify-between py-[1.7rem] px-[1.7rem] text-light-gray-400">
				<p>5 items left</p>
				<p class="capitalize">clear completed</p>
			</div>
		</div>
		<div class="justify-center gap-x-[2rem] mt-[2rem]" :class="taskStyles">
			<button
				v-for="(item, index) in lastBtns"
				:key="index"
				class="capitalize pt-[.3rem] text-[1.5rem] font-w700"
				:class="[which ? 'text-primary-blue' : 'text-light-gray-400']">
				{{ item }}
			</button>
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

const isCompleted = ref(0)

const inputData = ref<Quest>({
	task: '',
})

const test = (): void => {
	console.log(inputData.value.task)
}

const taskData = ref<string[]>([
	'Complete online JavaScript course',
	'Joq around the park 3x',
	'10 minutes meditation',
	'Read for 1 hour',
	'Pick up groceries',
	'Complete Todo App on Frontend Mentor',
])

const which = ref<boolean>(false)

const lastBtns = ref<string[]>(['all', 'active', 'complete'])

const btnStyles: string = 'w-[2rem] h-[2rem] mr-[1rem] rounded-full border-[1px] border-light-gray-300'
const taskStyles: string = 'block py-[1.1rem] bg-light-gray-100 flex items-center px-[1.7rem] rounded-lg'

const lastBtnsS: string = ' '
</script>
