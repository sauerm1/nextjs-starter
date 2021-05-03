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
						<Box>{cart.items[name] ? cart.items[name].count : 0}</Box>
						<Button onClick={() => addItem(name)}>+</Button>
					</Box>
				))}

				{Object.keys(cart.items).length ? (
					<Box>
						<p style={{ textAlign: "right" }}>Subtotal : {priceFormatter(cart.totalPrice)}</p>
						<p style={{ textAlign: "right" }}>Sales Tax : {priceFormatter(cart.totalPrice * 0.06)}</p>
						<p style={{ fontWeight: "bold", textAlign: "right" }}>
							Total : {priceFormatter(cart.totalPrice * 0.06 + cart.totalPrice)}
						</p>
					</Box>
				) : null}

				<Link href="/demo/zustand">
					<Button>Back To Shopping</Button>
				</Link>
				{Object.keys(cart.items).length ? <Button onClick={emptyCart}>Checkout</Button> : null}
			</Page>
		</>
	);
};

export default zustand;
