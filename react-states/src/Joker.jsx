import { useEffect, useState } from "react";

export default () => {
    const url = "https://official-joke-api.appspot.com/random_joke"

    let [joke, setJoke] = useState({});

    const getNewJoke = async()=>{
        let response = await fetch(url);
        let json_res = await response.json()
        let new_joke = {setup:json_res.setup, punchline:json_res.punchline};
        setJoke(new_joke);
    }
  
    useEffect(()=>{
        getNewJoke();
    },[]);
  

    return (
        <>
        <h1>{joke.setup}</h1>
        <h2>{joke.punchline}</h2>
        <button onClick={getNewJoke}>Get New Joke</button>
        </>
    )
}