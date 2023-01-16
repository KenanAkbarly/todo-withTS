// in ToDoItem.tsx
import * as React from 'react'
// Import interfaces
import { TodoItemInterface } from '../interface'
// TodoItem component
const ToDoItem = (props: TodoItemInterface) => {
    console.log("necesen",props.todos);
    
return (
    <>
 <div>
 <div className='todo-item' >
<div onClick={() => props.handleTodoComplete(props.todos.id)}>
{props.todos.isCompleted ? (
<span className='todo-item-checked'>✔</span>
) : (
<span className='todo-item-unchecked' />
)}
</div>
<div className='todo-item-input-wrapper'>
    {
        props.todos.isCompleted ?(<input value={props.todos.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todos.id)}
            placeholder='add' style={{fontSize:'20px',color:'lightgray',textDecoration:'line-through'}}/>):(<input value={props.todos.name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todos.id)}
                placeholder='add' style={{fontSize:'20px',color:'black'}}/>)
    }

</div>
<div className='item-remove' onClick={() => props.handleTodoRemove(props.todos.id ) 
 }>
 x
</div>
</div>
 </div>
 <div onClick={()=> props.handleRemoveCompleted(props.todos.isCompleted)}  className='clear_completed'>
    Clear completed 
   </div>


    </>
)
}
export default ToDoItem