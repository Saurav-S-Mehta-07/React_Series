import { useState } from "react"

export default () => {

    let [moves, setMoves] = useState({blue : 0, red : 0, yellow : 0, green : 0});
    let [arr, setArr] = useState(["no moves"]);

    const incBlue = ()=>{
       setMoves((prevMoves)=>{
         return {...prevMoves, blue : prevMoves.blue+1}
       });

       setArr((prevArr)=> [...prevArr, "blue moves"]);
    }
     const incGreen = ()=>{
       setMoves((prevMoves)=>{
         return {...prevMoves, green : prevMoves.green+1}
       });
    }
     const incYellow = ()=>{
       setMoves((prevMoves)=>{
         return {...prevMoves, yellow : prevMoves.yellow+1}
       });
    }
     const incRed = ()=>{
       setMoves((prevMoves)=>{
         return {...prevMoves, red : prevMoves.red+1}
       });
    }

    return (
        <div>
            <p>Game Begins</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button onClick={incBlue} style={{backgroundColor:"blue"}}>+1</button>

                <p>Green moves = {moves.green}</p>
                <button onClick={incGreen}  style={{backgroundColor:"green"}}>+1</button>

                <p>Yellow moves = {moves.yellow}</p>
                <button onClick={incYellow}  style={{backgroundColor:"yellow", color:"black"}}>+1</button>

                <p>Red moves = {moves.red}</p>
                <button onClick={incRed}  style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    )
}