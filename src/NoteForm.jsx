import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    addNote(inputText);
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pridat novou poznamku"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit">Pridat poznamku</button>
    </form>
  );
}

export default NoteForm;
