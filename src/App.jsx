import { nanoid } from "nanoid";
import React, { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import FilterButton from './components/FilterButton'
import Todo from "./components/Todo";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    // we will make a newTask object to add to the array
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  // Deleting a task
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  
  
  
  const taskList = tasks.map(task =>
  <Todo 
    name={task.name}
    id ={task.id}
    completed= {task.completed}
    key= {task.id} //Help react keep track of tasks
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    />
    )
    //Count the number of tasks added
    const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
    const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>To-do-app</h1>
     <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />

      </div>
      <h2 id="list-heading">{headingText}</h2>
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
