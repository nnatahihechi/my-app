// import React, {useState} from 'react'
// import TodoForm from './TodoForm'
// import Todo from './Todo'


// function TodoList() {
//     let [todos, setTodos ] = useState([]);

//     const addTodo = todo => {
//         if(!todo.text || /^\s*$/.test(todo.text)){
//             return;
//         }
//         const newTodos = [todo, ...todos];
//         setTodos(newTodos); 
        
//         // setTodos()
//     }

//     const updatedTodos =(todoId, newInput) => {
//         if(!newInput.text || /^\s*$/.test(newInput.text)){
//             return;
//         };
//         setTodos(prev => prev.map(item =>(item.id ===todoId ? newInput : item)))

//     }
//     const removeTodo = id =>{
//         const removeArr = [...todos].filter(todo => todo.id !==id)
//         setTodos(removeArr)
//     }

//     const completeTodo = id =>{
//         let updatedTodos = todos.map(todo =>{
//             if (todo.id === id){
//                 todo.iscompleted = !todo.iscompleted;
//             }

//             // !true = false
//             // !false = true
//             return todo
//         });
//         setTodos(updatedTodos);
//     };
   

//     // console.log(todos)
//   return (
//     <div>
//         <h1>schedule for the day?</h1> 
//         <TodoForm onSubmit={addTodo}/>
//         <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updatedTodos={updatedTodos} />
//     </div>
//   )
// }

// export default TodoList

import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);


  const addTodo = td => {
    if (!td.text || /^\s*$/.test(td.text)) {
      return;
    }

    const newTodos = [td, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What your schedule for the day?
      <p>plan your day
      </p>
      </h1>
      {/* <img src="src/image/emoji2.jpeg" alt=""/> */}

      <TodoForm addTodo={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;