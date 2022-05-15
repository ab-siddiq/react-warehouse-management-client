import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate("");
  const location = useLocation();
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
  };
  let errorElement;

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }
  const handleLogin = () => {};

  if (user) {
    console.log("login success");
  }
  return (
    <div className="container my-5 vh-100 d-flex justify-content-end ">
      <Form className="" style={{width: '400px', height: '400px', border: '1px solid grey', padding: '20px 60px', borderRadius: '5px'}} onSubmit={handleLoginSubmit}>
        <div className="d-flex justify-content-center"><h2 className="mb-3">Please Login</h2></div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="" controlId="formBasicCheckbox">
          <span>
            New to DEM? <Link to="/register">Please register.</Link>
          </span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Link to="/resetpassword">Forgot password?</Link>
        </Form.Group>
        {errorElement}
       <div className="d-flex justify-content-end">
       <Button
          onClick={handleLogin}
          className=""
          variant="primary"
          type="submit"
        >
          Login
        </Button>
       </div>
      </Form>
    </div>
  );
};

export default Login;
