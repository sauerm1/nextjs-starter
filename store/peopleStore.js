import create from "zustand";
import { devtools } from "zustand/middleware";

let peopleStore = (set) => ({
  people: ["Mark", "John", "Matt"],
  addPerson: (person) => set((state) => ({ people: [...state.people, person] })),
  removePerson: (key) => set((state) => {
	  let p = [...state.people]
	  p.splice(key, 1)
	  return({ people: p })
  }),
});

peopleStore = devtools(peopleStore);

const usePeopleStore = create(peopleStore);

export default usePeopleStore;
