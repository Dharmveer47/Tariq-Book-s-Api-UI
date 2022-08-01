import React, { useState, useEffect, useContext } from "react";
import { BookContext } from "../App";
const GetBook = () => {
  const state = useContext(BookContext);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://api-book-directory.herokuapp.com/books";
  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();
    if (response.status === 200) {
      setData(json);
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Book Directory</h1>
      {data.map((book) => {
        return (
          <div
            key={book._id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
              textAlign: "center",
            }}
          >
            <h2>{book?.title}</h2>
            <p>{book?.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GetBook;
