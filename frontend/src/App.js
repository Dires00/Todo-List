import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';


import './global.css'
import './App.css'
import './main.css'

import List from './Components/List'
import Popup from './Components/Popup'
import { BiSearchAlt2 } from 'react-icons/bi'

import api from './services/api'


function App() {
  let index = 0
  const [buttonPopup, setButtonPopup] = useState(false)
  const [allTasks, setAllTasks] = useState([{}])

  useEffect(() => {
    async function getAllTasks() {
      const response = await api.get('/todolist',)
      setAllTasks(response.data)
    }

    getAllTasks()
  }, [])

  return (
    <div id="app">
      <main>
        <div className='new-task'>
          <Button className='new-task-button' variant="text" onClick={() => setButtonPopup(true)}>Adicionar tarefa</Button>
        </div>
      
        <div className='search'>
          <input className='search-input'type='text' placeholder="Pesquisar..." />
          <BiSearchAlt2 className='search-icon'></BiSearchAlt2>
        </div>

        <ul>
          {allTasks.map(data => (
            <li className='todolist-infos' key={index++}>
              <List data={data} duedate={data.duedate} />
            </li>
          ))}
        </ul>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} tasks={allTasks} setTasks={setAllTasks} />
      </main>
    </div>
  );
}

export default App;
