import React from "react";
import { useState } from "react";

export default function CreateNoteForm({ url, getNotes }) {
  const [text, setText] = useState("");
  async function addNotes() {
    const response = await fetch(url, {
      method: "POST", // The HTTP method
      headers: {
        "Content-Type": "application/json", // Sending JSON data
      },
      body: JSON.stringify({ text: text }), // The data to send (in this case, name)
    });
    getNotes();
  }
  return (
    <form onSubmit={addNotes}>
      <input
        type="text"
        placeholder="Type text here.."
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      ></input>
      <button>Add text</button>
    </form>
  );
}
