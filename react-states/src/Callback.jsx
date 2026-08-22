import { useState } from "react"

function init(){
    console.log("init was called");
    return Math.random()
}

export default () => {
    let [count, setCount] = useState(init); // if init() -> it will called in each re-rendering but use initial value only
    console.log("component re-render");

    const incCount =  ()=>{
        setCount(count+1)  //count by 1
        
        
        // setCount(count+2) // count by 2

        // alternate to count by 2 but not works
        // setCount(count+1) 
        // setCount(count+1)

        // alternate to count by 2 yeah now works
        // setCount((count)=>  count+1);
        // setCount(count => count+1);

        // constant
        // setCount(25)

    }

    return (
        <div>
            <button onClick={incCount}>Count : {count}</button>
        </div>
    )
}