import { useState } from "react"

export default () => {
    let [fullName, setFullName] = useState("")
    const handleFullName = (event)=>{
        console.log(event.target.value);
        setFullName(event.target.value);
    }

    const handleForm = (event)=>{
        event.preventDefault();
        setFullName("");
        console.log("form submitted");
    }

    return(
        <form action="" onSubmit={handleForm}>
            <h1>{fullName && fullName}</h1>
            <input type="text" placeholder="enter your name" value={fullName} onChange={handleFullName}/>
            <button style={{margin:"10px"}}>Submit</button>
        </form>
    )
}