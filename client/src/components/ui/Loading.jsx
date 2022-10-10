import React from "react";

//css
import "./Loading.css";

function Loading() {
  return (
    <div className="Loading__Container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
