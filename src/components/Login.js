import React, { useContext, useRef } from "react";
import { ACTION } from "../App";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BookContext } from "../App";
export default function Login() {
  const { dispatch } = useContext(BookContext);

  const singUpUrl = `https://api-book-directory.herokuapp.com/auth/login`;

  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const body = {
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
        return res.json();
      })
      .then((data) => {
        if (data.message === "Auth Succesful") {
          const userCrdentials = {
            name: data.name,
            _id: data._id,
            token: data.token,
          };
          dispatch({
            type: ACTION.LOGIN,
            payload: true,
          });
          dispatch({
            type: ACTION.USERCREDENTIALS,
            payload: userCrdentials,
          });
          localStorage.setItem("user", JSON.stringify(userCrdentials));
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
      <Heading>Login</Heading>
      <input ref={emailRef} type="text" placeholder="Userid" />
      <input ref={passRef} type="text" placeholder="Password" />
      <button>Login</button>
      <p
        onClick={() => {
          navigate("/signup");
        }}
      >
        Signup
      </p>
    </Form>
  );
}

export const Heading = styled.h1`
  background-color: transparent;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: darkcyan;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
  margin-bottom: 20px;
  input,
  button {
    width: 200px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #fff;
    background-color: #333;
  }
  button {
    width: 220px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 50px;
    font-size: 16px;
    color: #fff;
    background-color: #333;
  }
`;
