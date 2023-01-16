//in ToDoList.tsx
import * as React from 'react'
import TodoItem from './ToDoItem'
import { TodoListInterface } from '../interface'
const ToDoList = (props: TodoListInterface) => {
 return (
 <div className='todo-list'>
  
 <ul  >
 {props.todos.map((todo) => (
 <li  key={todo.id} >
 <TodoItem
  todos={todo}
  handleTodoUpdate={props.handleTodoUpdate}
  handleTodoRemove={props.handleTodoRemove}
  handleTodoComplete={props.handleTodoComplete}
  handleRemoveCompleted={props.handleRemoveCompleted}
 
 />
 </li>
 ))}
 </ul>

 </div>
 
 )
}
export default ToDoList