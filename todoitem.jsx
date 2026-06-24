import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItems from"./TodoItems";


const TodoItems =()=>{

    const {todoItems}=useContext(TodoItemsContext);
   // console.log(todoItemsFromContext);
  

    return (
    <div className="items-container">
        {todoItems.map((item)=>(
            <TodoItem 
            key={item.name}
            todoDate={item.dueDate}
             todoName={item.name} 
            >
            </TodoItem>
        ))}
      </div>
    );
};
export default TodoItems;