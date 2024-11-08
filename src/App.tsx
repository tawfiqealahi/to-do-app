
import { useState } from 'react';
import Todos from './components/Todos'
import './App.css';
const todoData=[
  {
    id: 1 ,
    title:'task 1'
  },
  {
    id: 2,
    title:'task2'
  },
  {
    id: 3,
    title:'task3'
  },
  {
    id: 4,
    title:'task4'
  }
]

function App() {
const [todos,setTodos]=useState(todoData)

const handleDeleteTodo =(id: string)=>{
 console.log(id)
}

return (
    <div className="App">
      <Todos handleDeleteTodo={handleDeleteTodo} todos={todos}></Todos>
    </div>
  );
}

export default App;
