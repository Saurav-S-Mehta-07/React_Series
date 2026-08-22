import {useState} from "react";

export default () => {

    let [like, setLike] = useState(false);

    const handleLike = async ()=>{
        await setLike((like)=>{
            return !like;
        });
    }

    return (
        <div>
            <p>
                {  
                   like?
                   (<i className="fa-solid fa-heart" style={{fontSize:"2rem", color:"red"}} onClick={handleLike}></i>)
                   :
                   (<i className="fa-regular fa-heart" style={{fontSize:"2rem"}} onClick={handleLike}></i>)
                }
            </p>
        </div>
    )
}