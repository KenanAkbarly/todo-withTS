 
import * as React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
import Active from './components/Active'
import { TodoInterface } from './interface'
// import Main from './Main'
import './style.css'
const App: React.FC = () => {
 const [todos, setTodos] = React.useState<TodoInterface[]>([])
 console.log("bu todos dur",todos);
 
 function handleTodoCreate(todo: TodoInterface) {
 const newTodosState: TodoInterface[] = [...todos]
 newTodosState.push(todo)
 setTodos(newTodosState)
 }

 function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
 
 const newTodosState: TodoInterface[] = [...todos]
 
 newTodosState.find((todo: TodoInterface) => todo.id === id)!.name = event.target.value
 
 setTodos(newTodosState)
 }

 function handleTodoRemove(id: string) {
 
 const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
  // todos.todo.splice(newTodosState)
 console.log(newTodosState);
 
 setTodos(newTodosState)
 }

 function handleTodoComplete(id: string) {
 
 const newTodosState: TodoInterface[] = [...todos]
 
 
 newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
setTodos(newTodosState)
console.log("salam",);

 }
 console.log("handle completed",);
 

 function handleRemoveCompleted(isCompleted:boolean){
  const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.isCompleted !== true)
  // todos.todo.splice(newTodosState)
 console.log(newTodosState);
 
 setTodos(newTodosState)
 }
return (
 <div className='App'>
<React.Fragment>
 <h2>todos</h2>
 <ToDoForm
 todos={todos}
 handleTodoCreate={handleTodoCreate}
 />
 <ToDoList
 todos={todos}
 handleTodoUpdate={handleTodoUpdate}
 handleTodoRemove={handleTodoRemove}
 handleTodoComplete={handleTodoComplete}
 handleRemoveCompleted={handleRemoveCompleted}
 />
 <div className='list_bottom' >

  <div >{todos.length} items left</div>
  
   <div className='done'>
   <button> <Link to={'/'}>ALL</Link></button>
   <button> <Link to={'/active'}>Active</Link></button>
   <button><Link to={'/active'}>Completed</Link></button>
   </div>
   
    
 
  
 </div>
 </React.Fragment>
 </div>
 );
}
export default App;





