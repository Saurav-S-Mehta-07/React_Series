import { useState } from "react"
import { getTicket, sum } from "./Helper";

import Ticket from "./Ticket";


export default function Lottery({size, winningSum}) {
    let [ticket, setTicket] = useState(getTicket(size));
    let isWinning = sum(ticket) === winningSum;

    const handleSetTicket = ()=>{
        setTicket(getTicket(size));
    }
    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <button onClick={handleSetTicket} style={{marginTop:"12px"}}>Buy a new ticket</button>
            <h1>{isWinning && "Congratulation! you won!!"}</h1>
        </div>
    )
}