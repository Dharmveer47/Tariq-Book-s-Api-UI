import React, { useContext, useRef, useState } from "react";
import { ACTION } from "../App";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BookContext } from "../App";

export const LOCALSTORAGE = {
  NAME: "tariquser",
};

export default function Login() {
  const { dispatch } = useContext(BookContext);
  const [loading, setLoading] = useState(false);
  const singUpUrl = `https://api-book-directory.herokuapp.com/auth/login`;

  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  const handleSumbit = async (e) => {
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const body = {
      email,
      password,
    };
    e.preventDefault();
    setLoading(true);
    if (body.email === "" || body.password === "") {
      alert("Please fill all fields");
      setLoading(false);
      return;
    }
    const response = await fetch(singUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.status === 400) {
      alert("Invalid email or password");
      setLoading(false);
      return;
    }
    const data = await response.json();
    if (response.status === 200) {
      setLoading(false);
      const userCrdentials = {
        name: data.name,
        _id: data._id,
        token: data.token,
      };
      localStorage.setItem(LOCALSTORAGE.NAME, JSON.stringify(userCrdentials));
      dispatch({
        type: ACTION.USERCREDENTIALS,
        payload: userCrdentials,
      });
      dispatch({
        type: ACTION.LOGIN,
        payload: data,
      });
      navigate("/");
    } else {
      setLoading(false);
      alert(data.message);
    }
  };


  return (
    <>
      <Form onSubmit={handleSumbit}>
        <Heading>Login</Heading>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passRef} type="text" placeholder="Password" />
        <button type="sumbit">{loading ? "Loading" : "Login"}</button>
      </Form>
      <p style={{ cursor: "pointer" }} onClick={() => navigate("/signup")}>
        Signup
      </p>
    </>
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
