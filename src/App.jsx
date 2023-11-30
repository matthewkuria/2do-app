import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import FilterButton from './components/FilterButton'
import Todo from "./components/Todo";


function App(props) {
  function addTask(name) {
    alert(name);
  }
  
  const taskList = props.tasks?.map(task => <Todo 
    name={task.name}
    id ={task.id}
    completed= {task.completed}
    key= {task.id} //Help react keep track of tasks
    />)
  return (
    <div className="todoapp stack-large">
      <h1>To-do-app</h1>
     <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />

      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">

        {taskList}
      </ul>
    </div>
  );
}


export default App
