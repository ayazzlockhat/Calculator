import Body from "./components/Body";
import Screen from "./components/Screen";
import ButtonBody from "./components/ButtonBody";
import Buttons from "./components/Buttons";

import React, {useState} from "react";

const buttonValues = [
  ["C", "+/-", "%", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

const App = () => {
  return (
    <Body>
      <Screen value="0" />
      <ButtonBody>
        <Buttons
          value="0"
          className=""
          onClick={() => {
            console.log("Clicked");
          }} 
        />
      </ButtonBody>
    </Body>
  );
};

export default App;
