import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList(){

    const style = {
                    margin:"5px",height:"35px",padding:"10px", borderRadius:"20px",
                    border : "none"
                };

    let [todos, setTodos] = useState([{id:uuidv4(), task:"sample"}]);
    let [newTask, setNewTasks] = useState("");

    const addTask = (event)=>{
         event.preventDefault()
         if(newTask==="") return;
         setTodos((prevTodos)=> ([...prevTodos, {task:newTask, id : uuidv4()}]));
         setNewTasks("");
    }

    const handleValue = (event)=>{
        setNewTasks(event.target.value)
    }

    const handleDelete = (id)=>{
         setTodos((prevTodos)=>{
            return prevTodos.filter((todo)=> todo.id!==id);
         })
    }

    return (
        <div>
            <h1>Todo List by Saurav</h1>

            <form action="#" onSubmit={addTask}>
                <input type="text" placeholder="enter todo.." value={newTask} onChange={handleValue} style={style}/>
                <button>Add</button>
            </form>

            <div style={{textAlign:"left"}}>
               { 
                 todos.map((todo)=>(
                    <div key={todo.id} style={{display:"flex", justifyContent:"space-between", marginBottom:"5px"}}>
                      <li style={{fontSize:"1.4rem"}}>{todo.task}</li> 
                      <button onClick={()=>handleDelete(todo.id)}>delete</button>
                    </div>
                 ))
               }
            </div>
        </div>
    )
}

export default TodoList;