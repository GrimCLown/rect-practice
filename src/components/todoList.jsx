import React from 'react'
import { useState, useEffect } from 'react'

const todoList = () => {
  const [items, setItems] = useState([]);
  const [task, setTask] = useState('');

  useEffect(()=>{
    console.log('items', items);
  },[items]);

   
  return (
    <div>
      <h3>Todo List</h3>
      <div>
      <input type="text" placeholder='Enter Taks' value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}/>
      <button onClick={() => {
        setItems([...items, {id: Date.now(), name:task, completed: false}])
      }}>submit</button>
      </div>
      <div>
        <ul>
        {items.map((item, index) => (
          <li key={item.id}>{item.name}
          <button 
           onClick={() => {
            setItems(items.filter((currentItem) => currentItem.id !== item.id));
          }}
          >delete</button>
          </li>
        ))
        }
        </ul>
        

      </div>
    </div>
  )
}

export default todoList