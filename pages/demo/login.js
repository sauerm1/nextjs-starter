import React, { useState } from "react";
import Header from "../../components/Header";
import Page from "../../components/Page";
import Input from "../../components/Input";
import Button from "../../components/Button";
import PageDescription from "../../components/PageDescription"
import useAuthStore from "../../store/persistStore";

const zustand = () => {
	const [inputValue, setInputValue] = useState("");
	const user = useAuthStore((state) => state.user);
	const logIn = useAuthStore((state) => state.logIn);
	const logOut = useAuthStore((state) => state.logOut);

	const submit = () => {
		logIn(inputValue);
		setInputValue("");
	};

	return (
		<div>
			<Header>Zustand - Persist</Header>
			<Page>
				<PageDescription
					title="Log In"
					description="This is an example of how you can persist state using Zustand. When the user logs in, the username will be placed in the Zustand persist store and added to local storage. When the page is visited at a later time, the Zustand persist store will check for this username in local storage, and if it exists it will set the global state user to that username."
				></PageDescription>
				<div style={{ marginBottom: "20px" }}>User Logged In: {user ? user : "None"}</div>
				{user ? (
					<div style={{ display: "flex" }}>
						<Button onClick={logOut}>Log Out</Button>
					</div>
				) : (
					<div style={{ display: "flex" }}>
						<Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="User Name" />
						<Button onClick={submit}>Log In</Button>
					</div>
				)}
			</Page>
		</div>
	);
};

export default zustand;
