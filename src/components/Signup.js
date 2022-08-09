import React, { useRef } from "react";
// import { ACTION } from "../App";
import { useNavigate } from "react-router-dom";
import { Heading, Form } from "./Login";
// import { BookContext } from "../App";
export default function Signup() {
  // const { dispatch } = useContext(BookContext);
  const [loading, setLoading] = React.useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const navigate = useNavigate();

  const singUpUrl = `https://api-book-directory.herokuapp.com/auth/signup`;

  const handleSumbit = (e) => {
    
    e.preventDefault();
    setLoading(true);
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const body = {
      name,
      email,
      password,
    };
    if (body.name === "" || body.email === "" || body.password === "") {
      alert("Please fill all fields");
      setLoading(false);
      return;
    }

    fetch(singUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status === 400) {
          alert("Invalid email or password");
          setLoading(false);
          return;
        }
        else if (res.status === 201) {
          setLoading(false);
          navigate("/");
        } else {
          setLoading(false);
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Form onSubmit={handleSumbit}>
        <Heading>Signup</Heading>
        <input ref={nameRef} type="name" placeholder="name" />
        <input ref={emailRef} type="email" placeholder="email" />
        <input ref={passRef} type="text" placeholder="Password" />
        <button > { loading ? "Loading..." : "Signup"} </button>
      </Form>
      <p style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        Login
      </p>
    </>
  );
}
