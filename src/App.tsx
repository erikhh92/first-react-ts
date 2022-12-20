import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { Sub } from "./types";

interface AppState {
  subs: Array<Sub>,
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber(n => n + 1)
  }
  
  return (
    <div className="App" ref={divRef}>
      <h1>Midu subs</h1>
      <List subs={subs} />
      New subs: {newSubsNumber}
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
