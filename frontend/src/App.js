import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



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
  const [hide, setHide] = useState(false)
  const [buttonPopup, setButtonPopup] = useState(false)
  const [allTasks, setAllTasks] = useState([{}])
  const [deleteTrigger, setDeleteTrigger] = useState(false)
  const [deleteId, setId] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    getAllTasks()
  }, [])

  async function getAllTasks() {
    const response = await api.get('/todolist',)
    setAllTasks([...response.data])
  }

  async function handleDelete(id) {
    if (id) {
      const response = await api.delete(`/todolist/${id}`)
      if (response) {
        window.location.reload(true)
      }
      return response
    }
  }

  async function handleSearch(){
    if(search){
      const response = await api.get(`/content?description=${search}`)
      if(response){
        setAllTasks([...response.data])
        return response
      }
    }
    getAllTasks()
  }

  return (
    <div id="app">
      <main>
        <div className='new-task'>
          <Button className='new-task-button' variant="text" onClick={() => setButtonPopup(true)}>Adicionar tarefa</Button>
        </div>

        <div className='search'>
          <input className='search-input' type='text' placeholder="Pesquisar..." onChange={(e) => setSearch(e.target.value)}/>
          <BiSearchAlt2 className='search-icon' onClick={() => {
            if(search){
              handleSearch()
            }
          }}></BiSearchAlt2>
        </div>

        <FormGroup className='switch'>
          <FormControlLabel control={<Switch onChange={() => setHide(!hide)} />} label="Arquivadas" />
        </FormGroup>

        <ul>
          {allTasks.map(data => data && data.hide === hide ? (
            <li className='todolist-infos' key={index++}>
              <List
                data={data}
                setTrigger={setDeleteTrigger}
                setId={setId}
              />
            </li>
          ) : (''))}
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
