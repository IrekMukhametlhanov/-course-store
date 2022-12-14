import React, { useState } from "react";
import { Button, Htag, P, Rating, Tag} from "../components";




export default function Home(): JSX.Element{

  const [rating, setRating]=useState<number>(4); 

  return (
    <div>
      <Htag tag='h1'>text</Htag>
      <Button apperance="primary" arrow="right"  >Кнопка</Button>
      <Button apperance="ghost" arrow="down">Кнопка2</Button>
      <P size='s'>FDS</P>
      <P size='m'>FDS</P>
      <P size='l'>FDS</P>
      <Tag size="s"> ghost</Tag>
      <Tag size="m" color="red">red</Tag>
      <Tag size="m" color="green">green</Tag>
      <Tag color="green">green</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />

    </div>
  );
}
