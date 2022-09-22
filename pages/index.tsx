import React from "react";
import { Button, Htag } from "../components";




export default function Home(): JSX.Element{
  return (
    <div>
      <Htag tag='h1'>text</Htag>
      <Button apperance="primary" arrow="right">Кнопка</Button>
      <Button apperance="ghost" arrow="down">Кнопка2</Button>
    </div>
  );
}
