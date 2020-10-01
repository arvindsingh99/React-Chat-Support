import React, { useState } from "react";

import FloatBtn from './components/FloatBtn';
import ChatWindow from './components/ChatWindow';

function App() {
  const [opened,toggleOpen] =useState(true);

  const changeMode = () =>{
      toggleOpen(!opened)
  }
  return (
      (opened?

     <ChatWindow/>
     :
     <FloatBtn pressHandler={changeMode}/>


      

      )
  );
  }

  export default App;
