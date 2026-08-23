import { useState } from "react"

export default () => {
    let [fullname, setFullName] = useState("")
    let [username, setUserName] = useState("")

    const handleFullName = (event)=>{
        console.log(event.target.value);
        setFullName(event.target.value);
    }

    const handleForm = (event)=>{
        event.preventDefault();
        setFullName("");
        setUserName("");
        console.log("form submitted");
    }

    const handleUserName = (event)=>{
        setUserName(event.target.value);
    }


    return(
        <form action="" onSubmit={handleForm}>
            <h2>{fullname && fullname}</h2>
            <h3>{username && "@" + username}</h3>

            <label htmlFor="fullname">Fullname : </label>
            <input type="text" placeholder="enter your full name" id="fullname" value={fullname} onChange={handleFullName}/>
              <br />
              <br />

            <label htmlFor="username">Username : </label>
            <input type="text" placeholder="enter your username" id="username" value={username} onChange={handleUserName}/>
            <br />
              <br />

            <button style={{margin:"10px"}}>Submit</button>
        </form>
    )
}