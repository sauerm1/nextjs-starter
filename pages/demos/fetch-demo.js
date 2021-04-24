import { useState, useEffect } from "react";
import Page from "../../components/Page/Page";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import useFetch from "../../utils/useFetch";
import Header from "../../components/Header/Header";

const FetchDemo = () => {
  const [headerData, headerError, headerloading, headerRequest] = useFetch();
  const [bodyData, bodyError, bodyloading, bodyRequest] = useFetch();
  const [input, setInput] = useState("");

  const handleHeaderClick = () => {
    const options = {
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/header`,
      method: "get",
    };
    headerRequest(options);
  };

  const handleBodyClick = () => {
    const options = {
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/body`,
      data: { input },
      method: "post",
    };
    console.log(options);
    bodyRequest(options);
  };

  return (
    <div>
      <Header></Header>
      <Page>
        {!headerloading && !headerData ? <h1>Wheres my head?</h1> : null}
        {headerloading && <h1>Loading...</h1>}
        {headerData?.header && <h1>{headerData?.header}</h1>}
        <Button onClick={handleHeaderClick}>GET Header</Button>

        {!bodyloading && !bodyData.body ? <h1>Wheres my body?</h1> : null}
        {bodyloading && <h1>Loading...</h1>}
        {bodyData?.body && <h1>Posted Data: {bodyData?.body}</h1>}
        <Input value={input} onChange={(e) => setInput(e.target.value)}>
          Input
        </Input>
        <Button onClick={handleBodyClick}>POST body</Button>
      </Page>
    </div>
  );
};

export default FetchDemo;
