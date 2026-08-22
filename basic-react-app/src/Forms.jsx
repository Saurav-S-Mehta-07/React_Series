

function handleForm(event){
   event.preventDefault()
   console.log("form submitted");
}

export default function Forms(){
   return (
    <form onSubmit={handleForm}>
        <input type="text" placeholder="enter name" />
        <button>submit</button>
    </form>
   )
}