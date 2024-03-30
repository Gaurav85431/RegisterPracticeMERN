import React from "react";
import RandomInsert from "./RandomInsert";
import RandomDisp from "./RandomDisp";
import RandomShow from "./RandomShow";

function CallRandom() {
  return (
    <div>
      <hr />
      <hr />
      <hr />
      <br />
      <br />

      <RandomInsert />

      <hr />
      <hr />
      <hr />
      <br />
      <br />
      {/* <RandomDisp /> */}

      <hr />
      <hr />
      <hr />
      <br />
      <br />
      <RandomShow />
    </div>
  );
}

export default CallRandom;
