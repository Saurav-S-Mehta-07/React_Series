import { useEffect, useState } from "react"


export default () => {
    let [count, setCount] = useState(0);

    const incCount =  ()=>{
        console.log(count + " ");
        setCount((count)=>count+1);
        console.log(count + " ")
    }

    useEffect(()=>{
      console.log("Use Effect");
    },[])

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={incCount}>Incr by +1</button>
        </div>
    )
}