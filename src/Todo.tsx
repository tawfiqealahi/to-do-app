import React from 'react';

type Props = {
    todo: {
        id: number;
        title: string;
    }
};

const Todo: React.FC<Props> = ({todo}) => {
    const{id,title}=todo;
  return (
    <div>
<article className='todo' >
    <h3>{id}</h3>
    <p>{title}</p>
</article>
    </div>
  );
};

export default Todo;