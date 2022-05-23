import React, { useState } from 'react';
import TodoForm from './TodoForm';
import {FiCheckCircle} from 'react-icons/fi'
import { RiCloseCircleLine } from 'react-icons/ri';
import Todo from './Todo';
let doneTask = [];
function TodoList() {
  let [todos, setTodos] = useState([]);
  // const [todo, setTodo] = useState({});

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    // console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    todos = [...todos].filter(todo => todo.id !== id);

    setTodos(todos);
  };

  // const completeTodo = id => {
  //   let updatedTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.isComplete = !todo.isComplete;
  //     }
  //     return todo;
  //   });
  //   setTodos(updatedTodos);
  // };

  const doneTodo = id => {
    todos.map(todo => {
      if (todo.id === id) {
          todo.isComplete = !todo.isComplete;  
          setTodos([...todos]);     
      }
    })
  }

  return (
    <>
      <h1>what's your schedule for the day??
      <p>let's plan your day...</p>
      </h1>
      <TodoForm onSubmit={addTodo} />
      {/* <Todo
        todos={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        doneTodo={doneTodo}
      /> */}

      {
        todos.map((todo, index) => {
          if (todo.isComplete === false) {
            return (
              <Todo
                todo={todo}
                doneTodo={doneTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
                key={index}
              />
            )            
          }
        })
      }

      {
        todos.map((todo, index) => {
          if (todo.isComplete === true) {
            return (
              <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
                  <p>{todo.text}</p>

                  <div>
                    <RiCloseCircleLine
                      className='delete-icon'
                      onClick={()=>removeTodo(todo.id)}
                    />
                  </div>
              </div>
            )            
          }
        })
      }
    </>
  );
}

export default TodoList;