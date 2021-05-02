import create from "zustand";
import { devtools } from "zustand/middleware";

let groceryStore = (set) => ({
	groceries: {
		apple: { price: 0.99 },
		banana: { price: 1.1 },
		orange: { price: 1.75 },
	},
	cart: {
		totalItems: 0,
		totalPrice: 0,
		items: {
			// apple: { count: 1, price: 1.5 },
			// banana: { count: 2, price: 2 },
			// orange: { count: 5, price : 6.25 },
		},
	},
	addItem: (itemName) =>
		set((state) => {
			const cart = { ...state.cart };
			cart.totalItems++;
			cart.totalPrice += state.groceries[itemName].price;
			state.cart.items[itemName] ? cart.items[itemName].count++ : (cart.items[itemName] = { count: 1 });
			return { ...state, cart };
		}),
	removeItem: (itemName) =>
		set((state) => {
			const cart = { ...state.cart };
			state.cart.items[itemName] && cart.totalItems--;
			state.cart.items[itemName] && (cart.totalPrice -= state.groceries[itemName].price);
			!state.cart.items[itemName] || state.cart.items[itemName].count === 1
				? delete cart.items[itemName]
				: cart.items[itemName].count--;

			return { ...state, cart };
		}),
	emptyCart: () =>
		set((state) => {
			return {
				...state,
				cart: { totalItems: 0, totalPrice: 0, items: {} },
			};
		}),
});

groceryStore = devtools(groceryStore);

const useGroceryStore = create(groceryStore);

export default useGroceryStore;
