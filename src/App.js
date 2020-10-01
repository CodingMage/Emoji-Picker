import React from 'react';
import './App.css';
import './CSS/style.css'

import EmojiFeatcher from './Components/EmojiFeatcher';
import EmojiGet from './Components/EmojiGet';

function App() {
  return (
    <div className="App">
      {/* <EmojiFeatcher /> */}
      <EmojiGet group='smileys-emotion' />
      <EmojiGet group='people-body' />
      <EmojiGet group='animals-nature' />

      <EmojiGet group='travel-places' />
      <EmojiGet group='activities' />
      <EmojiGet group='objects' />
      <EmojiGet group='flags' />


    </div>
  );
}

export default App;
