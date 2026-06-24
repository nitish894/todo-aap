import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import {useReducer} from "react";
import "./App.css";
import TodoItemscontextProvider, { TodoItemsContext } from "./store/todo-items-store";
// all the fuction are defined in the store part function... so we can comment all the progrm here...
/*const todoItemsReducer = (currTodoItems,action)=>{
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

*/function App() {

 // const[todoItems,setTodoItems]=useState([]);
 /*const[todoItems,dispatchTodoItems]=useReducer(todoItemsReducer, []);

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

 // };

 /* const deleteItem=(todoItemName)=>{
    //console.log(`Item Deleted:${todoItemName}`);

    const deleteItemAction={
    type:"DELETE_ITEM",
    payload:{
      itemName:todoItemName,
    }
   };
   dispatchTodoItems(deleteItemAction);


  };
 // const defaultTodoItems =[{name:"buy ghee", dueDate:"today"}];
 // console.log(defaultTodoItems);
  
//todoItemsContext.provider can access the holr child element.... inside there provider body
  */return (
   /* <TodoItemsContext.Provider value={{todoItems,
     addNewItems,
     deleteItem
    }}
     >*/
     <TodoItemscontextProvider>
    <center className="todo-container">
      <AppName />
      <AddTodo  />
       <WelcomeMessage></WelcomeMessage>
      <TodoItems />
    </center>
    </TodoItemscontextProvider>
  );
}

export default App;