import React from 'react'

import { useState } from 'react'

import './global.css'
import './App.css'
import './main.css'

import List from './Components/List/List'
import Popup from './Components/Popup/Popup'

function App() {
  const [buttonPopup,  setButtonPopup] = useState(false)
  return (
    <div id="app">
      <main>
        <div className='new-task'>
          <button className='new-task' onClick={() => setButtonPopup(true)}>Adicionar tarefa</button>
        </div>
        <ul>
          <List/>
        </ul>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
      </main>
    </div>
  );
}

export default App;
