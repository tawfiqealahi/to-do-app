import React from 'react';
import Todo from '../Todo';

type Props = {
    todos: {
        id: number;
        title: string;
    }[]
    
};

const Todos: React.FC<Props> = ({todos}) => {
  console.log(todos)
  return (
    <div className='todos'>
       {
        todos.map(todo=> <Todo 
         todo={todo} key={todo.id}
         ></Todo>)
       }
    </div>
  );
};

export default Todos;