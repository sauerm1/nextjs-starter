import useGroceryStore from "../../store/groceryStore";
import Header from "../../components/Header";
import Page from "../../components/Page";
import Button from "../../components/Button";
import PageDescription from "../../components/PageDescription";
import React from "react";
import Box from "../../components/Box";
import Link from "next/link";
import priceFormatter from "../../utils/priceFormatter";

const zustand = () => {
	const groceries = useGroceryStore((state) => state.groceries);
	const cart = useGroceryStore((state) => state.cart);
	const addItem = useGroceryStore((state) => state.addItem);
	const removeItem = useGroceryStore((state) => state.removeItem);

	return (
		<>
			<Header>Zustand</Header>
			<Page>
				<PageDescription
					title="Grocery Shopping"
					description="This is an example of how you can save global state using Zustand. "
				></PageDescription>

				<p>You have {cart.totalItems} items in your shopping cart.</p>

				{Object.keys(groceries).map((name, i) => (
					<Box key={name}>
						<Box>
						{name} : {priceFormatter(groceries[name].price)}

						</Box>
						<Button onClick={() => removeItem(name)}>-</Button>
						<Box>{cart.items[name] ? cart.items[name].count : 0}</Box>
						<Button onClick={() => addItem(name)}>+</Button>
					</Box>
				))}
				<Link href="/demo/cart">
					<Button>Proceed to cart</Button>
				</Link>
			</Page>
		</>
	);
};

export default zustand;
