
import { useState } from 'react';
import Todos from './components/Todos'
import './App.css';
import AddTodos from './components/AddTodos';
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

const handleDeleteTodo =(id: number)=>{
 const filterData = todos.filter(todo=>todo.id !==id);
 setTodos(filterData)
}

const handleAddNewTodo =(newTodo: {id:number; title: string}) =>{

  setTodos((prevState)=>[...prevState,newTodo]);
}

return (
    <div className="App">
      <AddTodos handleAddNewTodo={handleAddNewTodo} ></AddTodos>
      <Todos
      handleDeleteTodo={handleDeleteTodo} todos={todos}></Todos>
    </div>
  );
}

export default App;
