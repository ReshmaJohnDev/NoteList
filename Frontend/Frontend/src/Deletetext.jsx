import React from "react";

export default function Deletetext({ id, getNotes }) {
  async function deleteText(id) {
    const response = await fetch(`http://127.0.0.1:5000/notes/${id}`, {
      method: "DELETE",
    });
    getNotes();
  }
  return (
    <div>
      <button onClick={() => deleteText(id)}>🗑</button>
    </div>
  );
}
