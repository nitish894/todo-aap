import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({todoItems: [],
    addNewItems: () => {},
    deleteItem: () => {},
});
const todoItemsReducer = (currTodoItems,action)=>{
    let newTodoItems = currTodoItems;
  if(action.type === "NEW_ITEM"){
     newTodoItems =[
      ...currTodoItems,
      { name:action.payload.itemName, dueDate:action.payload.itemDueDate},
    ];

  }else if(action.type === "DELETE_ITEM"){
    newTodoItems = currTodoItems.filter((item)=>item.name !== action.payload.itemName);
   // setTodoItems(newTodoItems);

  }
  return newTodoItems;
};


const TodoItemscontextProvider =({children})=>{

    const[todoItems,dispatchTodoItems]=useReducer(todoItemsReducer, []);
    
      const addNewItems = (itemName,itemDueDate)=>{
       const newItemAction={
        type:"NEW_ITEM",
        payload:{
          itemName,
          itemDueDate
        },
       };
       dispatchTodoItems(newItemAction);
    
        //console.log(`New Item Added:${itemName} Date:${itemDueDate}`);
       // const newTodoItems=[...todoItems, {name:itemName, dueDate:itemDueDate}];
       /* setTodoItems((currValue)=>[
          ...currValue, 
          {name:itemName, dueDate:itemDueDate},
    
        ]);*/
    
      };
    
      const deleteItem=(todoItemName)=>{
        //console.log(`Item Deleted:${todoItemName}`);
    
        const deleteItemAction={
        type:"DELETE_ITEM",
        payload:{
          itemName:todoItemName,
        }
       };
       dispatchTodoItems(deleteItemAction);
    
    
      };
      return <TodoItemsContext.Provider 
      value={{todoItems,
     addNewItems,
     deleteItem,
    }}
     >{children}</TodoItemsContext.Provider>

}
export default TodoItemscontextProvider;