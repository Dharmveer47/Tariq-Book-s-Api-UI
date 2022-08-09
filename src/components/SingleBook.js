import React, { useEffect, useState } from "react";
import UpdateBook from "./UpdateBook";
import { useParams } from "react-router-dom";

export default function SingleBook() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const url = `https://api-book-directory.herokuapp.com/books/${id}`;

  useEffect(() => {
    setLoading(true);
    const GetSingleBook = async (URL) => {
      const response = await fetch(URL);
      const json = await response.json();
      if (response.status === 200) {
        setData(json);
        setLoading(false);
      } else {
        setLoading(true);
      }
    };
    GetSingleBook(url);
  }, [url]);
  if (loading) {
    return <div>Loading...</div>;
  }
//   console.log(data);
  return (
    <div>
      <div>
        <h1>{data.title}</h1>
        <p>{data.author}</p>
      </div>
      <UpdateBook id={data._id} setData={setData}/>
    </div>
  );
}
