<template>
	<form @submit.prevent="test" class="z-10 relative">
		<div :class="taskStyles" class="mb-[2rem]">
			<button type="submit">
				<img src="" alt="" aria-label="confrim task" :class="btnStyles" />
			</button>
			<input
				type="text"
				v-model="inputData.task"
				class="block pt-[.3rem] outline-none leading-[0] text-[1.2rem] text-light-gray-500 dark:text-dark-gray-300 bg-transparent"
				placeholder="Create a new todo..." />
		</div>
		<div class="rounded-xl overflow-hidden">
			<ul v-auto-animate>
				<li
					:class="taskStyles"
					v-for="(item, index) in taskData"
					:key="item"
					class="flex items-center rounded-none border-b-[1px] border-b-light-gray-300 dark:border-b-dark-gray-700 py-[1.5rem]">
					<button
						:class="[
							btnStyles,
							isCompleted.includes(item) && 'bg-gradient-to-br from-primary-from to-primary-to border-none',
						]"
						@click="completedTask(item)"
						class="flex justify-center items-center">
						<img
							:src="isCompleted.includes(item) ? check : ''"
							alt=""
							:class="isCompleted.includes(item) ? 'w-[.8rem] h-[.8rem]' : ''" />
					</button>
					<p
						class="text-[1.2rem] text-light-gray-500 pt-[.4rem] dark:text-dark-gray-300 transition-none"
						:class="isCompleted.includes(item) ? 'line-through dark:text-dark-gray-500' : ''">
						{{ item }}
					</p>
					<button type="button" aria-label="delete task" class="block ml-auto cursor-pointer" @click="deleteTask(item)">
						<img :src="x" alt="delete task" class="w-[1.5rem] h-[1.5rem]" />
					</button>
				</li>
			</ul>
			<div
				class="bg-light-gray-100 dark:bg-dark-gray-200 dark:text-gray-500 text-[1.2rem] flex justify-between py-[1.7rem] px-[1.7rem] text-light-gray-400">
				<p>{{ howManyLeft }} items left</p>
				<p class="capitalize">clear completed</p>
			</div>
		</div>
		<div class="justify-center gap-x-[2rem] mt-[2rem]" :class="taskStyles">
			<button
				v-for="(item, index) in lastBtns"
				:key="index"
				class="capitalize pt-[.3rem] text-[1.5rem] font-w700 dark:text-dark-gray-500"
				:class="[which ? 'text-primary-blue' : 'text-light-gray-400']">
				{{ item }}
			</button>
		</div>
		<div
			class="mt-[1rem] py-[4rem] text-center border-2 border-transparent rounded-xl text-light-gray-400 dark:text-dark-gray-600 text-[1.4rem]">
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

const isCompleted = ref<string[]>(['Complete online JavaScript course'])

const inputData = ref<Quest>({
	task: '',
})

const test = (): void => {}

const taskData = ref<string[]>([
	'Complete online JavaScript course',
	'Joq around the park 3x',
	'10 minutes meditation',
	'Read for 1 hour',
	'Pick up groceries',
	'Complete Todo App on Frontend Mentor',
])

const howManyLeft = computed(() =>{
	if (taskData.value.length - isCompleted.value.length < 0) {
		return 0
	} else {
		return taskData.value.length - isCompleted.value.length
	}
})

const deleteTask = (item: string): void => {
	taskData.value = taskData.value.filter(fruit => {
		if (fruit === item) {
			return false
		}
		return true
	})
}

const completedTask = (item: string): void => {
	if (isCompleted.value.includes(item)) {
		isCompleted.value = isCompleted.value.filter(el => el !== item)
	} else {
		isCompleted.value.push(item)
	}
}

const which = ref<boolean>(false)

const lastBtns = ref<string[]>(['all', 'active', 'completed'])

const btnStyles: string =
	'w-[2rem] h-[2rem] mr-[1rem] rounded-full border-[1px] border-light-gray-300 dark:border-dark-gray-500'
const taskStyles: string =
	'block py-[1.1rem] bg-light-gray-100 dark:bg-dark-gray-200 flex items-center px-[1.7rem] rounded-lg'
</script>

<style lang="scss" scoped></style>
