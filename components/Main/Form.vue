<template>
	<form @submit.prevent="submitNewTask" class="z-10 relative rounded-xl overflow-hidden">
		<div
			class="mb-[2rem] lg:py-[1.5rem] py-[1.1rem] bg-light-gray-100 dark:bg-dark-gray-200 flex items-center px-[1.7rem] rounded-xl lg:px-[2.5rem]">
			<button
				type="submit"
				@click="submitNewTask"
				aria-labelledby="add task"
				class="p-[0.9rem] px-[.95rem] lg:p-[1.09rem] mr-[1rem] rounded-full border-[1px] border-light-gray-300 dark:border-dark-gray-500 lg:w-[2.3rem] lg:h-[2.3rem] lg:mr-[2.5rem]"></button>
			<input
				type="text"
				v-model.trim="inputData.task"
				class="block pt-[.3rem] outline-none leading-[0] w-full text-[1.2rem] text-light-gray-500 dark:text-dark-gray-300 bg-transparent lg:text-[1.8rem] placeholder:text-neutral-500"
				placeholder="Create a new todo..." />
		</div>
		<div class="rounded-xl overflow-hidden">
			<ul v-auto-animate>
				<li
					:draggable="true"
					@dragstart="startDragging(index)"
					@dragenter="dragEnterLi(index, $event)"
					@dragleave="dragLeaveLi"
					@dragover.prevent
					@drop="dragDrop(index)"
					:class="taskStyles"
					v-for="(item, index) in actualData"
					:key="item"
					class="flex items-center rounded-none border-b-[1px] border-b-light-gray-300 dark:border-b-dark-gray-700 cursor-move py-[1.5rem] active:cursor-grab">
					<button
						aria-labelledby="checking image"
						type="button"
						:class="[
							btnStyles,
							!activeTasks.includes(item) && 'bg-gradient-to-br from-primary-from to-primary-to border-none',
						]"
						@click="checkTask(item)"
						class="flex justify-center items-center">
						<img
							v-if="!activeTasks.includes(item)"
							:src="check"
							alt="checked task"
							:class="!activeTasks.includes(item) ? 'w-[.8rem] h-[.8rem]' : ''" />
					</button>
					<p
						class="text-[1.2rem] text-light-gray-500 pt-[.4rem] dark:text-dark-gray-300 transition-none lg:text-[1.7rem]"
						:class="!activeTasks.includes(item) ? 'line-through dark:text-dark-gray-500' : ''">
						{{ item }}
					</p>
					<button
						type="button"
						aria-labelledby="delete task"
						class="block ml-auto cursor-pointer"
						@click="deleteTask(index)">
						<img :src="x" alt="delete task" class="w-[1.5rem] h-[1.5rem]" />
					</button>
				</li>
			</ul>
			<div
				class="bg-light-gray-100 dark:bg-dark-gray-200 dark:text-gray-500 text-[1.2rem] flex justify-between items-center py-[1.7rem] px-[1.7rem] text-light-gray-400 lg:text-[1.6rem] lg:py-[.7rem] lg:px-[2.5rem]">
				<p>{{ itemsLeft }} items left</p>
				<div class="justify-center gap-x-[2rem] hidden lg:flex" :class="taskStyles">
					<button
						v-for="(item, index) in lastBtns"
						:key="index"
						class="capitalize pt-[.3rem] text-[1.5rem] font-w700 text-light-gray-400 dark:text-dark-gray-500 transition-none lg:text-[1.6rem]"
						:class="[typeTask == index ? 'text-primary-blue dark:text-primary-blue' : '']"
						@click="typeTask = index">
						{{ item }}
					</button>
				</div>
				<button type="button" class="capitalize lg:text-[1.6rem]" @click="clearCompletedTasks">clear completed</button>
			</div>
		</div>
		<div class="justify-center gap-x-[2rem] mt-[2rem] lg:hidden" :class="taskStyles">
			<button
				v-for="(item, index) in lastBtns"
				:key="index"
				class="capitalize pt-[.3rem] text-[1.5rem] font-w700 text-light-gray-400 dark:text-dark-gray-500 transition-none lg:text-[1.6rem]"
				:class="[typeTask == index ? 'text-primary-blue dark:text-primary-blue' : '']"
				@click="typeTask = index">
				{{ item }}
			</button>
		</div>
		<div
			@dragenter="enterDiv"
			@dragleave="leaveDiv"
			@dragover.prevent
			@drop="dropDiv"
			class="my-[3rem] py-[4rem] text-center border-2 border-transparent rounded-xl text-light-gray-400 dark:text-dark-gray-600 text-[1.4rem] lg:text-[1.6rem]">
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

const dragIndex = ref<number | null>(null)
const hoverIndex = ref<number | null>(null)

const startDragging = (index: number) => {
	dragIndex.value = index
}

const dragEnterLi = (index: number, e: DragEvent) => {
	hoverIndex.value = index
	if ((e.currentTarget as HTMLElement).tagName === 'LI') {
		;(e.currentTarget as HTMLElement).classList.add('drop-target')
	}
}

const dragLeaveLi = (e: DragEvent) => {
	hoverIndex.value = null
	;(e.target as HTMLElement).classList.remove('drop-target')
}

const dragDrop = (index: number) => {
	if (dragIndex.value === null) return

	const movedItem = taskData.value[dragIndex.value]

	taskData.value.splice(dragIndex.value, 1)
	taskData.value.splice(index, 0, movedItem)
	document.querySelectorAll('.drop-target').forEach(el => el.classList.remove('drop-target'))

	dragIndex.value = null
}

const enterDiv = (e: DragEvent): void => {
	;(e.currentTarget as HTMLElement).classList.add('draggedBorder')
}

const leaveDiv = (e: DragEvent): void => {
	const target = e.currentTarget as HTMLElement
	const related = e.relatedTarget as HTMLElement | null

	if (!target.contains(related)) {
		target.classList.remove('draggedBorder')
	}
}

const dropDiv = (e: DragEvent): void => {
	let cleanSet = new Set<number>([])
	while (cleanSet.size < taskData.value.length) {
		cleanSet.add(Math.floor(Math.random() * taskData.value.length))
	}
	let newArr: string[] = []
	const cleanArr = Array.from(cleanSet)
	cleanArr.forEach((el, i) => {
		newArr[i] = taskData.value[cleanArr[el]]
	})
	taskData.value = newArr
	;(e.currentTarget as HTMLElement).classList.remove('draggedBorder')
}

const lastBtns = ref<string[]>(['all', 'active', 'completed'])

const btnStyles: string =
	'w-[2rem] h-[2rem] mr-[1rem] rounded-full border-[1px] border-light-gray-300 dark:border-dark-gray-500 lg:w-[2.3rem] lg:h-[2.3rem] lg:mr-[2.5rem]'
const taskStyles: string =
	'py-[1.1rem] bg-light-gray-100 dark:bg-dark-gray-200 flex items-center px-[1.7rem] lg:px-[2.5rem] border-b-[2px] border-b-transparent'
</script>

<style lang="scss" scoped>
.draggedBorder {
	border-color: hsl(220, 98%, 61%);
}

.drop-target {
	border-bottom: 2px solid hsl(220, 98%, 61%);
}
</style>
