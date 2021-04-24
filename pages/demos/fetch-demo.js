import { useState, useEffect } from "react";
import { Page } from "../../components/Page/Page";
import Button from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import useFetch from "../../utils/useFetch";

const FetchDemo = () => {
  const [ headerData, headerError, headerloading, headerRequest ] = useFetch();

  const handleClick = () => {
    const options = {
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/header`,
      method: "get",
    };
    headerRequest(options);
  };
  

  return (
    <Page>
      {!headerloading && !headerData ? <div>Im waiting</div>: null}
      {headerloading && <div>Loading...</div>}
      {headerData?.header && <div>{headerData?.header}</div>}
      <Button onClick={handleClick}>Get Header</Button>
      <Input>Input</Input>
      <Button>Send</Button>
    </Page>
  );
};

export default FetchDemo;
