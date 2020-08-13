import React from "react";
import ButtonList from "./ButtonList";
import NumberList from "./NumberList";
import BetterNumList from "./BetterNumList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <ButtonList />
      </div>
      <div>
        <NumberList />
      </div>
      <div>
        <BetterNumList />
      </div>
    </div>
  );
}

export default App;
