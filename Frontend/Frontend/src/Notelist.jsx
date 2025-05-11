import React from "react";
import Deletetext from "./Deletetext";

function Notelist({ notes, url, getNotes }) {
  return (
    <div>
      {notes.map((note) => (
        <div className="Note" key={note.id}>
          <h3>{note.text}</h3>
          <Deletetext id={note.id} getNotes={getNotes} />
        </div>
      ))}
    </div>
  );
}

export default Notelist;
