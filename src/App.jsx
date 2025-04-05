import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setToDo] = useState([])

  let text = "to do list"

  const inputRef = useRef()
  // add item for list
  const handleAddtodo = () => {
    const textTodo = inputRef.current.value;
    const newItem = {complete:false,textTodo}
    setToDo([...todo,newItem])
    inputRef.current.value =""
  }
  // change complete and done item
  const handleDone = (index)=>{
    const newTodo =[...todo]
    newTodo[index].complete = !newTodo[index].complete
    setToDo(newTodo)

  }
  //delete current item
  const handleDel =(index) =>{
    const newTodo =[...todo]
    newTodo.splice(index,1)
    setToDo(newTodo)
  }
  
  return (
    <>
      <div className='app'>
        <h2 className='header'>{text.toUpperCase()}</h2>
        <ul className='list'>

          {todo.map(({complete,textTodo},index) => {
            return (
              <div className='item-contanier'>
                <li onClick={() => handleDone(index)} 
                  key={index}  className={complete ? "done":""} >
                  {textTodo}
                </li>
                <span onClick={() =>handleDel(index) }>✖️</span>
              </div>
                )
          })}
        </ul>
        <label htmlFor="added">Add To Task List :-  
          <input ref={inputRef} id='added' name='added' placeholder='Add your Task' type="text" />
        </label>
        <button onClick={handleAddtodo} value="Add">Add</button>
      </div>    
    </>
  )
}

export default App
