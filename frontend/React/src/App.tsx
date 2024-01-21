// import Webcam from "react-webcam";
import React, { useEffect, useState } from 'react';
import WebCamera from "./component/WebCamera"

// import Dropdown from "./components/Dropdown";

function App() {

  return (
    <>
    <h1>TakePhoto</h1>
    <div className="p-5">
      <WebCamera/>
    </div>
    </>
  );
}

export default App;