import React, { useContext, useRef } from "react";
import { ACTION } from "../App";
import { useNavigate } from "react-router-dom";
import { Heading, Form } from "./Login";
import { BookContext } from "../App";
export default function Signup() {
  const { dispatch } = useContext(BookContext);

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const navigate = useNavigate();

  const singUpUrl = `https://api-book-directory.herokuapp.com/auth/signup`;

  const handleSumbit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const body = {
      name,
      email,
      password,
    };

    fetch(singUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status === 201) {
          dispatch({
            type: ACTION.LOGIN,
            payload: true,
          });
          dispatch({
            type: ACTION.USERCREDENTIALS,
            payload: {
              name,
              email,
              password,
            },
          });
          navigate("/");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={handleSumbit}>
      <Heading>Signup</Heading>
      <input ref={nameRef} type="name" placeholder="name" />
      <input ref={emailRef} type="email" placeholder="email" />
      <input ref={passRef} type="text" placeholder="Password" />
      <button>Signup</button>
      <p
        onClick={() => {
          navigate("/");
        }}
      >
        Login
      </p>
    </Form>
  );
}
