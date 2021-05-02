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
	const emptyCart = useGroceryStore((state) => state.emptyCart);

	return (
		<>
			<Header>Zustand</Header>
			<Page>
				<PageDescription
					title="Your Cart"
					description="This is an example of how you can save global state using Zustand. "
				></PageDescription>

				<p>You have {cart.totalItems} items in your shopping cart.</p>

				{Object.keys(cart.items).map((name, i) => (
					<Box key={name}>
						{name} : {priceFormatter(groceries[name].price)}
						<Button onClick={() => removeItem(name)}>-</Button>
						<Button>{cart.items[name] ? cart.items[name].count : 0}</Button>
						<Button onClick={() => addItem(name)}>+</Button>
					</Box>
				))}
				<p>Subtotal : {priceFormatter(cart.totalPrice)}</p>

				<Link href="/demo/zustand">
					<Button>Back To Shopping</Button>
				</Link>
				<Button onClick={emptyCart}>Checkout</Button>
			</Page>
		</>
	);
};

export default zustand;
