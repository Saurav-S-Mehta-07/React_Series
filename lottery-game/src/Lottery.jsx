import { useState } from "react"
import { getTicket, sum } from "./Helper";

import Ticket from "./Ticket";
import Button from './Button';


export default function Lottery({size, winCondition}) {
    let [ticket, setTicket] = useState(getTicket(size));
    let isWinning = winCondition(ticket);

    const handleSetTicket = ()=>{
        setTicket(getTicket(size));
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
             <Button handleSetTicket={handleSetTicket}/>
            <h1>{isWinning && "Congratulation! you won!!"}</h1>
        </div>
    )
}