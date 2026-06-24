import {useState, useRef } from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import { IoBagAdd } from "react-icons/io5";

function AddTodo(){
  const {addNewItems}=useContext(TodoItemsContext);

 // const[todoName,setTodoName]=useState("");
  //const[dueDate,setDueDate]=useState("");
  const todoNameElement=useRef();
  const dueDateElement = useRef();

 /* const handleNameChange=(event)=>{
    setTodoName(event.target.value);
    noOfUpdates.current +=1;

//cause to useRef use then no nedded this component...
  };
  const handleDateChange=(event)=>{
    setDueDate(event.target.value);
    console.log(`noOfUpdates are :${noOfUpdates.current}`);

  };*/

  const handleAddButtonClicked =(event)=>{
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
   // console.log(`${todoName} due on: ${dueDate}`);
   addNewItems(todoName,dueDate);
   // setDueDate("");
   // setTodoName("");

  };


    return  <div className="container text-center">
        <form className="row kg-row"
        onSubmit={handleAddButtonClicked}>
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter todo text here"
              //value={todoName}
             // onChange={handleNameChange}
            />
          </div>

          <div className="col-4">
            <input type="date" 
            ref={dueDateElement}
            //value={dueDate}
           // onChange={handleDateChange} 
            />
          </div>

          <div className="col-2">
            <button
            type="submit"
              className="btn btn-success kg-button"
            >
              <IoBagAdd />
            </button>
            </div>
            </form>
            </div>
} 
export default AddTodo;