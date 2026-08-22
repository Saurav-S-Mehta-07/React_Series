import { useState } from "react"


export default () => {
    let [count, setCount] = useState(0);

    const incCount = async ()=>{
        console.log(count + " ");
        await setCount((count)=>count+1);
        console.log(count + " ")
    }

    return (
        <div>
            <button onClick={incCount}>Count : {count}</button>
        </div>
    )
}