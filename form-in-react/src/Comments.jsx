import { useState } from "react";
import { useFormik } from "formik";

import CommentCart from "./CommentCart";

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Username cannot be empty";
  }

  if (!values.remarks) {
    errors.remarks = "Remarks cannot be empty";
  }

  if (!values.rating) {
    errors.rating = "Rating is required";
  }

  return errors;
};

export default function CommentForm() {
  const [comments, setComments] = useState([]);

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },

    validate,

    onSubmit: (values, { resetForm }) => {
      setComments((prevComments) => [...prevComments, values]);

      resetForm({
        values: {
          username: "",
          remarks: "",
          rating: 5,
        },
      });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.username && formik.errors.username ? (
          <p style={{color:"red"}}>{formik.errors.username}</p>
        ) : null}

        <br />
        <br />

        <textarea
          placeholder="add remarks"
          name="remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>

        {formik.touched.remarks && formik.errors.remarks ? (
          <p style={{color:"red"}}>{formik.errors.remarks}</p>
        ) : null}

        <br />
        <br />

        <input
          type="number"
          name="rating"
          placeholder="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.rating && formik.errors.rating ? (
          <p style={{color:"red"}}>{formik.errors.rating}</p>
        ) : null}

        <br />
        <br />

        <button type="submit">Add Comment</button>
      </form>

      <div>
        {comments.map((comment, index) => (
          <CommentCart comment={comment} key={index} />
        ))}
      </div>
    </>
  );
}
