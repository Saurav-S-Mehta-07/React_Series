function handleClick(event){
    console.log("hello");
    console.log(event)
}

function handleMouseOver(){
    console.log("I'm a para")
}

function handleDBL(){
    console.log("double click")
}

export default function(){
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>this para is for event demo</p>
            <button onDoubleClick={handleDBL}>double click me</button>
        </div>
    )
}