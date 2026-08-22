import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList(){

    const style = {
                    margin:"5px",height:"35px",padding:"10px", borderRadius:"20px",
                    border : "none"
                };

    let [todos, setTodos] = useState([{id:uuidv4(), task:"sample", done : false}]);
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

    const handleEdit = (id)=>{
        setTodos((prevTodos)=>{
           return  prevTodos.map((todo)=>{
                if(todo.id === id){
                    return {
                        ...todo,
                        task : todo.task.toUpperCase()
                    }
                }
                return todo;
            })
        })
    }

    const handleEditALL = ()=>{
        setTodos((prevTodos)=>{
           return prevTodos.map((todo)=>{
                    return {
                        ...todo,
                        task : todo.task.toUpperCase()
                    }
            })
        })
    }

    const handleMarkAsDone = (id)=>{
        setTodos((prevTodos)=>{
           return  prevTodos.map((todo)=>{
                if(todo.id === id){
                    return {
                        ...todo,
                        done : !(todo.done)
                    }
                }
                return todo;
            })
        })
    }

     const handleDoneALL = ()=>{
        setTodos((prevTodos)=>{
           return prevTodos.map((todo)=>{
                    return {
                        ...todo,
                        done : !(todo.done)
                    }
            })
        })
    }

    return (
        <div>
            <h1>Todo List by Saurav</h1>

            <form action="#" onSubmit={addTask} style={{marginBottom:"10px"}}>
                <input type="text" placeholder="enter todo.." value={newTask} onChange={handleValue} style={style}/>
                <button>Add</button>
            </form>

            <div style={{textAlign:"left", border:"1px solid white", padding:"10px"}}>
               { 
                 todos.map((todo)=>(
                    <div key={todo.id} style={{display:"flex", justifyContent:"space-between", marginBottom:"5px"}}>
                      <li style={{fontSize:"1.4rem", textDecoration: todo.done&&"line-through"}}>{todo.task}</li> 
                      <div>
                        <button onClick={()=>handleDelete(todo.id)} style={{backgroundColor:"black", color:"red", marginRight:"10px"}}>delete</button>
                        <button onClick={()=>handleEdit(todo.id)}>Update</button>
                        <button onClick={()=>handleMarkAsDone(todo.id)} style={{backgroundColor:"black", color:todo.done?"green":"white", marginLeft:"10px"}}>Done</button>
                      </div>
                    </div>
                 ))
               }
            </div>
            <button onClick={handleEditALL} style={{marginTop:"10px"}}>Update ALL</button>
            <button onClick={handleDoneALL} style={{marginTop:"10px", marginLeft:"10px"}}>Done ALL</button>

        </div>
    )
}

export default TodoList;