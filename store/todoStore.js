import create from "zustand";
import { devtools } from "zustand/middleware";

let todoStore = (set) => ({
	tasks: ["clean house", "grocery shopping", "go to work"],
	addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
	removeTask: (key) =>
		set((state) => {
			let p = [...state.tasks];
			p.splice(key, 1);
			return { tasks: p };
		}),
});

todoStore = devtools(todoStore);

const useTodoStore = create(todoStore);

export default useTodoStore;
