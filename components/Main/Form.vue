<template>
	<form @submit.prevent="submitNewTask" class="z-10 relative">
		<div :class="taskStyles" class="mb-[2rem]">
			<button type="submit">
				<img src="" alt="" aria-label="confrim task" :class="btnStyles" />
			</button>
			<input
				type="text"
				v-model.trim="inputData.task"
				class="block pt-[.3rem] outline-none leading-[0] w-full text-[1.2rem] text-light-gray-500 dark:text-dark-gray-300 bg-transparent"
				placeholder="Create a new todo..." />
		</div>
		<div class="rounded-xl overflow-hidden">
			<ul v-auto-animate>
				<li
					:draggable="true"
					@dragstart="dragStart(index)"
					@dragover.prevent
					@drop="drop(index)"
					:class="taskStyles"
					v-for="(item, index) in actualData"
					:key="item"
					class="flex items-center rounded-none border-b-[1px] border-b-light-gray-300 dark:border-b-dark-gray-700 cursor-move py-[1.5rem] active:cursor-grab">
					<button
						type="button"
						:class="[
							btnStyles,
							!activeTasks.includes(item) && 'bg-gradient-to-br from-primary-from to-primary-to border-none',
						]"
						@click="checkTask(item)"
						class="flex justify-center items-center">
						<img
							:src="!activeTasks.includes(item) ? check : ''"
							alt=""
							:class="!activeTasks.includes(item) ? 'w-[.8rem] h-[.8rem]' : ''" />
					</button>
					<p
						class="text-[1.2rem] text-light-gray-500 pt-[.4rem] dark:text-dark-gray-300 transition-none"
						:class="!activeTasks.includes(item) ? 'line-through dark:text-dark-gray-500' : ''">
						{{ item }}
					</p>
					<button
						type="button"
						aria-label="delete task"
						class="block ml-auto cursor-pointer"
						@click="deleteTask(index)">
						<img :src="x" alt="delete task" class="w-[1.5rem] h-[1.5rem]" />
					</button>
				</li>
			</ul>
			<div
				class="bg-light-gray-100 dark:bg-dark-gray-200 dark:text-gray-500 text-[1.2rem] flex justify-between py-[1.7rem] px-[1.7rem] text-light-gray-400">
				<p>{{ itemsLeft }} items left</p>
				<button type="button" class="capitalize" @click="clearCompletedTasks">clear completed</button>
			</div>
		</div>
		<div class="justify-center gap-x-[2rem] mt-[2rem]" :class="taskStyles">
			<button
				v-for="(item, index) in lastBtns"
				:key="index"
				class="capitalize pt-[.3rem] text-[1.5rem] font-w700 text-light-gray-400 dark:text-dark-gray-500 transition-none"
				:class="[typeTask == index ? 'text-primary-blue dark:text-primary-blue' : '']"
				@click="typeTask = index">
				{{ item }}
			</button>
		</div>
		<div
			@dragenter="dragEnterDiv"
			@dragleave="dragLeaveDiv"
			@dragover.prevent
			@drop="dropOnDiv"
			class="my-[3rem] py-[4rem] text-center border-2 border-transparent rounded-xl text-light-gray-400 dark:text-dark-gray-600 text-[1.4rem]">
			<p>Drag and drop to reorder list</p>
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

const inputData = reactive<Quest>({
	task: '',
})

const typeTask = ref<number>(0)

const taskData = ref<string[]>([
	'Complete online JavaScript course',
	'Joq around the park 3x',
	'10 minutes meditation',
	'Read for 1 hour',
	'Pick up groceries',
	'Complete Todo App on Frontend Mentor',
])

const allTasks = computed(() => taskData.value)
const activeTasks = computed(() => taskData.value.filter(el => !isCompleted.value.includes(el)))
const completedTasks = computed(() => taskData.value.filter(el => isCompleted.value.includes(el)))

const actualData = computed(() => {
	if (typeTask.value === 1) return activeTasks.value
	if (typeTask.value === 2) return completedTasks.value
	return allTasks.value
})

const itemsLeft = computed(() => activeTasks.value.length)

const checkTask = (item: string): void => {
	if (isCompleted.value.includes(item)) {
		isCompleted.value.splice(isCompleted.value.indexOf(item), 1)
	} else {
		isCompleted.value.push(item)
	}
}

const deleteTask = (index: number): void => {
	taskData.value.splice(index, 1)
}

const clearCompletedTasks = (): void => {
	taskData.value = allTasks.value.filter(el => !isCompleted.value.includes(el))
	isCompleted.value = []
}

const submitNewTask = (): void => {
	if (taskData.value.includes(inputData.task) || inputData.task === '') {
	} else {
		taskData.value.push(inputData.task)
		inputData.task = ''
	}
}

const draggedItemIndex = ref<number | null>(null)

const dragStart = (index: number) => {
	draggedItemIndex.value = index
}

const drop = (index: number) => {
	if (draggedItemIndex.value === null) return

	const movedItem = taskData.value[draggedItemIndex.value]
	taskData.value.splice(draggedItemIndex.value, 1)
	taskData.value.splice(index, 0, movedItem)

	draggedItemIndex.value = null
}

const dragEnterDiv = (event: DragEvent) => {
	;(event.currentTarget as HTMLElement).classList.add('draggedBorder')
}

const dragLeaveDiv = (event: DragEvent) => {
	const target = event.currentTarget as HTMLElement
	const related = event.relatedTarget as HTMLElement | null

	if (!target.contains(related)) {
		target.classList.remove('draggedBorder')
	}
}

const dropOnDiv = (event: DragEvent) => {
	;(event.currentTarget as HTMLElement).classList.remove('draggedBorder')
	let newOrder = new Set<number>([])
	while (newOrder.size < taskData.value.length) {
		newOrder.add(Math.floor(Math.random() * taskData.value.length))
	}
	const newArr = Array.from(newOrder)
	let reorderedTasks = new Array(taskData.value.length)
	newArr.forEach((newIndex, i) => {
		reorderedTasks[newIndex] = taskData.value[i]
	})

	taskData.value = reorderedTasks
}

const lastBtns = ref<string[]>(['all', 'active', 'completed'])

const btnStyles: string =
	'w-[2rem] h-[2rem] mr-[1rem] rounded-full border-[1px] border-light-gray-300 dark:border-dark-gray-500'
const taskStyles: string =
	'block py-[1.1rem] bg-light-gray-100 dark:bg-dark-gray-200 flex items-center px-[1.7rem] rounded-lg'
</script>

<style lang="scss" scoped>
.draggedBorder {
	border-color: hsl(220, 98%, 61%);
}
</style>
