import useTodoStore from "../../store/todoStore";
import Header from "../../components/Header";
import Page from "../../components/Page";
import Input from "../../components/Input";
import Button from "../../components/Button";
import React, { useState } from "react";

const zustand = () => {
	const [inputValue, setInputValue] = useState("");
	const tasks = useTodoStore((state) => state.tasks);
	const addTask = useTodoStore((state) => state.addTask);
	const removeTask = useTodoStore((state) => state.removeTask);

	const submit = () => {
		addTask(inputValue);
		setInputValue("");
	};

	const deleteTask = (i) => {
		removeTask(i);
	};

	return (
		<>
			<Header>Zustand</Header>
			<Page>
				<h1>To Do List</h1>
				<div style={{ display: "flex" }}>
					<Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Luke..." />
					<Button onClick={submit}>Add Task</Button>
				</div>

				<p>We have {tasks.length} tasks in our DB.</p>

				{tasks.map((p, i) => (
					<div key={i} onClick={() => deleteTask(i)}>
						{p}
					</div>
				))}
			</Page>
		</>
	);
};

export default zustand;
