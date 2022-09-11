import React from 'react'
import { useState, useEffect } from 'react'

import './global.css'
import './App.css'
import './main.css'

import List from './Components/List/List'
import Popup from './Components/Popup/Popup'
import api from './services/api'

function App() {
  let index = 0
  const [buttonPopup,  setButtonPopup] = useState(false)
  const [allTasks, setAllTasks] = useState([{}])

  useEffect(() => {
    async function getAllTasks(){
      const response = await api.get('/todolist',)
      setAllTasks(response.data)
    }

    getAllTasks()
  }, [])

  return (
    <div id="app">
      <main>
        <div className='new-task'>
          <button className='new-task-button' onClick={() => setButtonPopup(true)}>Adicionar tarefa</button>
        </div>
        <ul>
          {allTasks.map(data => (
            <li className='todolist-infos' key={index++}>
              <List data={data}/>
            </li>
          ))}
        </ul>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
      </main>
    </div>
  );
}

export default App;
