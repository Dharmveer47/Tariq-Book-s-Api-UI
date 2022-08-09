import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PublicBook() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      cursor: "pointer",
    }}>
        <h5>Public's Books</h5>
      {data.map((book) => {
        return (
          <div
            onClick={() => navigate(`/book/${book._id}`)}
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
}
