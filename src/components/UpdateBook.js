import React, { useRef, useContext, useState } from "react";
import { BookContext } from "../App";
import { useNavigate } from "react-router-dom";
export default function UpdateBook({ id, setData }) {
  const { state } = useContext(BookContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const url = `https://api-book-directory.herokuapp.com/books/update/${id}`;
  const titleRef = useRef();
  const authorRef = useRef();

  const handleSumbit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      title: titleRef.current.value,
      author: authorRef.current.value,
    };
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": state.userCredentials.token,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (response.status === 200) {
      setLoading(false);
      setData(body);
      titleRef.current.value = "";
      authorRef.current.value = "";
      alert("Book updated successfully");
    } else {
      alert(data.message);
    }
  };
  const delteUrl = `https://api-book-directory.herokuapp.com/books/delete/${id}`;
  const handleDelete = async () => {
    const response = await fetch(delteUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": state.userCredentials.token,
      },
    });
    const data = await response.json();
    if (response.status === 200) {
      setData(data);

      alert("Book deleted successfully");
      navigate("/");
    } else {
      alert(data.message);
    }
  };
  return (
    <div>
      <h1>Update Book</h1>
      <form onSubmit={handleSumbit}>
        <input ref={titleRef} type="text" placeholder="Title" />
        <input ref={authorRef} type="text" placeholder="Author" />
        <button type="sumbit">{loading ? "Loading..." : "Edit Book"} </button>
      </form>
      <button onClick={handleDelete}>Delete Book</button>
    </div>
  );
}
