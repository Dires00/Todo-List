import React from 'react'

import './global.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Todo List</strong>
        <form>
          <div className='input-block'>
            <label htmlFor='description'>Description</label>
            <textarea></textarea>
          </div>

          <div className='input-block'>
            <label htmlFor='duedate'>Due Date</label>
            <input></input>
          </div>

          <button type='submit'>Save</button>
        </form>
      </aside>

      <main>
        <table id = "todolistTable">
          <tr>
            <th>Description</th>
            <th>Due Date</th>
            <th>Done</th>
          </tr>
        </table>
      </main>
    </div>
  );
}

export default App;
