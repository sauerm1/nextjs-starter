import useAuthStore from "../../store/persistStore";
import Header from "../../components/Header";
import Page from "../../components/Page";
import Input from "../../components/Input";
import Button from "../../components/Button";
import React, { useState } from "react";

const zustand = () => {
  const [inputValue, setInputValue] = useState("");
  const user = useAuthStore((state) => state.user);
  const logIn = useAuthStore((state) => state.logIn);
  const logOut = useAuthStore((state) => state.logOut);

  const submit = () => {
    logIn(inputValue);
    setInputValue("");
  };

  const deletePerson = () => {
    logOut();
  };

  return (
    <div>
      <Header>Zustand - Persist</Header>
      <Page>
        <h1>Log In</h1>
        <div>The logged in user will be stored in local storage so if you close and repoen this page, it will remember who logged in</div>
        <div>User Logged In: {user}</div>
        <div style={{ display: "flex" }}>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="User Name"/>
          <Button onClick={submit}>Log In</Button>
          <Button onClick={logOut}>Log Out</Button>
        </div>
      </Page>
    </div>
  );
};

export default zustand;
