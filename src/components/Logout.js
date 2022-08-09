import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ACTION, BookContext } from "../App";
import { LOCALSTORAGE } from "./Login";

export default function Logout() {
  const { dispatch } = useContext(BookContext);
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch({
      type: ACTION.LOGIN,
      payload: false,
    });
    localStorage.clear(LOCALSTORAGE.NAME);
    navigate("/");
  };
  return <button onClick={handleClick}>Logout</button>;
}
