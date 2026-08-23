import { useState } from "react";
import CommentCart from "./CommentCart";

let comments = [];

export default () => {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  const handleInputChange = (event) => {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  };

  const handleForm = (event) => {
    event.preventDefault();
    console.log(formData);
    comments.push(formData);
    setFormData({ username: "", remarks: "", rating: 5 });
    console.log("form submitted");
  };

  return (
    <>
    <form action="" onSubmit={handleForm}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <textarea
        placeholder="add remarks"
        name="remarks"
        value={formData.remarks}
        onChange={handleInputChange}
      ></textarea>
      <br />
      <br />
      <input
        type="number"
        name="rating"
        placeholder="rating"
        min={1}
        max={5}
        value={formData.rating}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <button>Add Comment</button>
    </form>
    <div>
        {
            comments.map((comment, index)=>{
                return <CommentCart comment={comment} key={index}/>
            })
        }
    </div>
    </>
  );
};
