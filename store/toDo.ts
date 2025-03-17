import { defineStore } from 'pinia'

export const useToDoStore = defineStore('toDo', {
	state: () => {
		return {
			isLight: false,
		}
	},
})
