import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Notelist from "./Notelist";
import CreateNoteForm from "./CreateNoteForm";

function App() {
  const [notes, setNotes] = useState([]);
  const url = "http://127.0.0.1:5000/notes";

  async function getNotes() {
    const response = await fetch(url);
    const data = await response.json();
    setNotes(data);
  }

  useEffect(() => {
    getNotes();
  }, []);
  return (
    <>
      <CreateNoteForm url={url} getNotes={getNotes} />
      <h3>{<Notelist url={url} notes={notes} getNotes={getNotes} />}</h3>
    </>
  );
}

export default App;
