import React, { createContext, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetBook from "./components/GetBook";
import Login from "./components/Login";
import Signup from "./components/Signup";
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

const initialState = {
  books: [],
  login: false,
  userCredentials: {},
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className="app">
      <BookContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routes>
            {state.login ? (
              <Route path="/" element={<GetBook />} />
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
