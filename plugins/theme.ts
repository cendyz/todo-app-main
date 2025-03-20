import { useToDoStore } from '~/store/toDo'

export default defineNuxtPlugin(nuxtApp => {
	const store = useToDoStore()

	const checkTheme = (): void => {
		if (typeof window !== 'undefined' && window.matchMedia) {
			if (window.matchMedia('(prefers-color-scheme: light)').matches) {
				document.documentElement.classList.add('light')
				store.isLight = false
			} else {
				document.documentElement.classList.add('dark')
				store.isLight = true
			}
		}
	}

	checkTheme()
})
