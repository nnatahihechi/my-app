import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'


function TodoList() {
    let [todos, setTodos ] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos); 
        
        // setTodos()
    }

    const updatedTodos =(todoId, newInput) => {
        if(!newInput.text || /^\s*$/.test(newInput.text)){
            return;
        };
        setTodos(prev => prev.map(item =>(item.id ===todoId ? newInput : item)))
    }
    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !==id)
        setTodos(removeArr)
    }

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if (todo.id === id){
                todo.iscomplete = !todo.iscomplete;
            }

            // !true = false
            // !false = true
            return todo
        });
        setTodos(updatedTodos);
    };
   

    // console.log(todos)
  return (
    <div>
        <h1>schedule for the day?</h1> 
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updatedTodos={updatedTodos} />
    </div>
  )
}

export default TodoList