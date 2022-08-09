import React, { useContext } from "react";
import { BookContext } from "../App";
import Createbook from "./Createbook";
import Logout from "./Logout";
import PublicBook from "./PublicBook";
const GetBook = () => {
  const { state } = useContext(BookContext);

  return (
    <div>
      <h1>Book Directory</h1>
      <h3>Hello : {state?.userCredentials?.name}</h3>
      <Logout />
      <PublicBook />
      <Createbook />
    </div>
  );
};

export default GetBook;
