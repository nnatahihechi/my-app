import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import {FiCheckCircle} from 'react-icons/fi'
const Todo = ({ todo, completeTodo, removeTodo, updateTodo, doneTodo}) => {
  // console.log(todos);
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <>
      {/* <div
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
      >
        <div key={todo.id}>
          {todo.text}
        </div>
  
  
        <div className='icons'>
          <RiCloseCircleLine
            className='delete-icon'
          />
          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className='edit-icon'
          />
          <FiCheckCircle
            onClick={()=>doneTodo(todo.id)}
            className='done-icon'
          />
  
        </div>
      </div> */}
      <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
          <p>{todo.text}</p>

          <div>
            <RiCloseCircleLine
              className='delete-icon'
              onClick={()=>removeTodo(todo.id)}
            />

        <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className='edit-icon'
          />

            <FiCheckCircle
              onClick={()=>{doneTodo(todo.id)}}
              className='done-icon'
            />
          </div>
      </div>
    </>
  )
};

export default Todo;