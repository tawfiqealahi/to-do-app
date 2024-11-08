import React from 'react';
import Todo from '../Todo';

type Props = {
    todos: {
        id: number;
        title: string;
    }[];
     handleDeleteTodo: Function;
    
};

const Todos: React.FC<Props> = ({todos,handleDeleteTodo}) => {
  console.log(todos)
  return (
    <div className='todos'>
       {
        todos.map(todo=> <Todo 
         todo={todo} key={todo.id} handleDeleteTodo={handleDeleteTodo}
         ></Todo>)
       }
    </div>
  );
};

export default Todos;