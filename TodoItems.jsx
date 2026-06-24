import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {

 // const contextObj = useContext(TodoItemsContext);
//console.log(contextObj);

  const { todoItems, deleteItem } = useContext(TodoItemsContext);
    return (
    <>
      {todoItems.map((item) => (
         <div className="container" key={item.name}>
          <div className="row">
            <div className="col-6">{item.name}</div>
            <div className="col-4">{item.dueDate}</div>
            <div className="col-2">
              <button 
              type="button"
              className="btn btn-danger" 
              onClick={()=>deleteItem(item.name)}
              >
                <AiFillDelete />
                </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoItems;