import { useState } from "react"


export default () => {
    let [count, setCount] = useState(0);

    const incCount =  ()=>{
        // setCount(count+1)  //count by 1
        
        
        // setCount(count+2) // count by 2

        // alternate to count by 2 but not works
        // setCount(count+1) 
        // setCount(count+1)

        // alternate to count by 2 yeah now works
        setCount((count)=>  count+1);
        setCount(count => count+1);

    }

    return (
        <div>
            <button onClick={incCount}>Count : {count}</button>
        </div>
    )
}