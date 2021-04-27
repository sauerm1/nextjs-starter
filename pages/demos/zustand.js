import usePeopleStore from "../../store/peopleStore";
import Header from "../../components/Header";
import Page from "../../components/Page";
import Input from "../../components/Input";
import Button from "../../components/Button";
import React, { useState } from "react";

const zustand = () => {
  const [inputValue, setInputValue] = useState("");
  const people = usePeopleStore((state) => state.people);
  const addPerson = usePeopleStore((state) => state.addPerson);
  const removePerson = usePeopleStore((state) => state.removePerson);

  const submit = () => {
    addPerson(inputValue);
    setInputValue("");
  };

  const deletePerson = (i) => {
    removePerson(i);
  };

  return (
    <div>
      <Header>Zustand</Header>
      <Page>
        <h1>People List</h1>
        <div style={{ display: "flex" }}>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Luke..."/>
          <Button onClick={submit}>Add person</Button>
        </div>

        <p>We have {people.length} in our DB.</p>
        <ul>
          {people.map((p, i) => (
            <li key={i} onClick={() => deletePerson(i)}>
              {p}
            </li>
          ))}
        </ul>
      </Page>
    </div>
  );
};

export default zustand;
