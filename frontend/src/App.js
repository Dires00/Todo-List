import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';


import './global.css'
import './App.css'
import './main.css'

import List from './Components/List'
import CreatePopup from './Components/CreatePopup'
import { BiSearchAlt2 } from 'react-icons/bi'
import DeletePopup from './Components/DeletePopup'

import api from './services/api'


function App() {
  let index = 0
  const [buttonPopup, setButtonPopup] = useState(false)
  const [allTasks, setAllTasks] = useState([{}])
  const [deleteTrigger, setDeleteTrigger] = useState(false)
  const [deleteId, setId] = useState('')

  useEffect(() => {
    async function getAllTasks() {
      const response = await api.get('/todolist',)
      setAllTasks([...response.data])
    }
    getAllTasks()
  },[])

  async function handleDelete(id) {
    if (id) {
      const response = await api.delete(`/todolist/${id}`)
      if (response) {
        /*const aux = [...allTasks]
        aux.filter(task => task._id !== id)
        setDeleteTrigger(false)
        setAllTasks(aux)
        setId('')*/
        window.location.reload(true)
        
      }
      return response
    }
  }

  return (
    <div id="app">
      <main>
        <div className='new-task'>
          <Button className='new-task-button' variant="text" onClick={() => setButtonPopup(true)}>Adicionar tarefa</Button>
        </div>

        <div className='search'>
          <input className='search-input' type='text' placeholder="Pesquisar..." />
          <BiSearchAlt2 className='search-icon'></BiSearchAlt2>
        </div>

        <ul>
          {allTasks.map(data => data ? (
            <li className='todolist-infos' key={index++}>
              <List
                data={data}
                setTrigger={setDeleteTrigger}
                setId={setId}
              />
            </li>
          ) : (<></>))}
        </ul>
        <DeletePopup
          trigger={deleteTrigger}
          setTrigger={setDeleteTrigger}
          handleDelete={handleDelete}
          id={deleteId}
        />
        <CreatePopup
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          tasks={allTasks}
          setTasks={setAllTasks}
        />
      </main>
    </div>
  );
}

export default App;
