import React, { useRef, useContext, useState } from "react";
import { BookContext } from "../App";

export default function Createbook() {
  const { state } = useContext(BookContext);
  const [loading, setLoading] = useState(false);
  const titleRef = useRef();
  const authername = useRef();
  const CreateUrl = `https://api-book-directory.herokuapp.com/books/create`;
  const handleSumbit = async (e)  => {
    setLoading(true);
    e.preventDefault();
    const title = titleRef.current.value;
    const author = authername.current.value;
    const body = {
      title,
      author,
    };
    const response = await fetch(CreateUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": state.userCredentials.token,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    console.log(data);
    if (response.status === 201) {
      setLoading(false);
      alert("Book created successfully");
    } else {
      setLoading(false);
      alert(data.message);
      return {};
    }
  };

  return (
    <div>
      <h1>Create a Book</h1>
      <form onSubmit={handleSumbit}>
        <div>
          <input ref={titleRef} type="text" placeholder="Book title" />
          <input ref={authername} type="text" placeholder="Auther name" />
        </div>
        <button type="sumbit">{loading ? "Loading..." : "Create Book"}</button>
      </form>
    </div>
  );
}
