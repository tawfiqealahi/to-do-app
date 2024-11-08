import React from 'react';

type Props = {
    todo: {
        id: number;
        title: string;
    };
    handleDeleteTodo: Function;
};

const Todo: React.FC<Props> = ({todo,handleDeleteTodo}) => {
    const deleteTodo =(id:number)=>{
        handleDeleteTodo(id)
    }

    const{id,title}=todo;
  return (
    <div>
<article className='todo' >
    <h3>{id}</h3>
    <p>{title}</p>
    <button onClick={()=>{deleteTodo(id)}} >Delete todo</button>
</article>
    </div>
  );
};

export default Todo;