import React, { createContext, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetBook from "./components/GetBook";
import SingleBook from "./components/SingleBook";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { LOCALSTORAGE } from "./components/Login";
import "./App.scss";
export const BookContext = createContext();

export const ACTION = {
  GET_BOOKS: "GET_BOOKS",
  LOGIN: "LOGIN",
  USERCREDENTIALS: "USERCREDENTIALS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.GET_BOOKS:
      return { ...state, books: action.payload };
    case ACTION.LOGIN:
      return { ...state, login: action.payload };
    case ACTION.USERCREDENTIALS:
      return { ...state, userCredentials: action.payload };
    default:
      return state;
  }
};

const GetLocaldata = () => {
  const getLocal = localStorage.getItem(LOCALSTORAGE.NAME)?.charAt(0);
  if (!getLocal || getLocal !== "{") {
    return { login: false, tariquser: false };
  } else {
    const getLocalforAuth = localStorage.getItem(LOCALSTORAGE.NAME);
    const tariquser = JSON.parse(getLocalforAuth);
    if (tariquser) {
      return { login: true, tariquser };
    }
  }
  return { login: false, tariquser: false };
};

const initialState = {
  books: [],
  login: GetLocaldata()?.login,
  userCredentials: GetLocaldata()?.tariquser,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="app">
      <BookContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routes>
            {state.login ? (
              <>
                <Route path="/" element={<GetBook />} />
                <Route path="/book/:id" element={<SingleBook />} />
                <Route path="*" element={<GetBook />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </BookContext.Provider>
    </div>
  );
}

export default App;
