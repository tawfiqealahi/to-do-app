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
    <form style={{textAlign:'center'}} onSubmit={handleSubmit}>
        <div className="form-input">
            <label className='title' htmlFor="title"> Todo Title </label> <br />
        <input className='input' type="text" placeholder='enter your next plan here' name='title' value={title} onChange={handleChange} required autoFocus />
        
        </div>
    <button className='submit' type='submit'>Add Todo</button>

    </form>
  );
};

export default AddTodos;