import React from 'react';

function Note({ note, deleteNote }) {
  return (
    <div className="note">
      <p>{note.text}</p>
      <button onClick={() => deleteNote(note.id)}>Odebrat</button>
    </div>
  );
}

export default Note;
