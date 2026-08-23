import { useState } from "react"

export default () => {

    let [formData, setFormData] = useState({fullname:"", username:"", password:""});

    // const handleFullName = (event)=>{
    //     setFullName(event.target.value);
    // }
    // const handleUserName = (event)=>{
    //     setUserName(event.target.value);
    // }

    const handleForm = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({fullname:"", username:"",password:""});
        console.log("form submitted");
    }

    let handleInputChange = (event)=>{
        setFormData((prevData)=>{
            return {...prevData, [event.target.name]:event.target.value};
        })
    }

    return(
        <form action="" onSubmit={handleForm}>

             <h2>{formData.fullname && formData.fullname}</h2>
             <h3>{formData.username && "@"+formData.username}</h3>

            <label htmlFor="fullname">Fullname : </label>
            <input type="text" placeholder="enter your full name" id="fullname" name="fullname" value={formData.fullname} onInput={handleInputChange}/>
              <br />
              <br />

            <label htmlFor="username">Username : </label>
            <input type="text" placeholder="enter your username" id="username" name="username" value={formData.username} onInput={handleInputChange}/>
            <br />
              <br />

              <label htmlFor="password">password : </label>
            <input type="password" placeholder="enter your password" id="password" name="password" value={formData.password} onInput={handleInputChange}/>
            <br />
              <br />

            <button style={{margin:"10px"}}>Submit</button>
        </form>
    )
}