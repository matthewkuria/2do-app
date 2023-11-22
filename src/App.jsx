import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>2-Do-List-App</h1>

        
      </div>
      <div className="card">
      <form action="">
        <label htmlFor="addItem">Add an Item</label>
        <input type="text" name="addItem" id="" />
        <button type="submit" className='btn'><img src="../public/add.png" alt=""  className="btn--img"/></button>
      </form>
       
      </div>
      
    </>
  )
}

export default App
