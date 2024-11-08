import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';

type Props = {
    handleAddNewTodo:Function;
};

const AddTodos: React.FC<Props> = ({handleAddNewTodo}) => {
    const [title,setTitle]=useState('');

    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.target.value);
    };

    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const newTodo = {
            id: new Date().getTime().toString(), title
        } ;
        handleAddNewTodo(newTodo);
        setTitle('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="form-input">
            <label htmlFor="title"> Todo Title: </label>
        <input type="text" name='title' value={title} onChange={handleChange} required autoFocus />
        
        </div>
    <button type='submit'>Add Todo</button>

    </form>
  );
};

export default AddTodos;