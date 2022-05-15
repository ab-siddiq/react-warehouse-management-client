import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Register = () => {
  const nameRef = useRef("");
  const phoneRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [user] = useAuthState(auth);
  const location = useLocation("");
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate("");
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  const [createUserWithEmailAndPassword, user1, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth, {
    sendEmailVerification: true,
  });
  console.log(user);

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = await e.target.name.value;
    const phone = await e.target.phone.value;
    const email = await e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name, phoneNumber: phone });
    sendEmailVerification();
  };
  return (
    <div className="container my-5 vh-100 d-flex justify-content-end">
      <Form onSubmit={handleRegister} style={{width: '600px', border: '1px solid grey', borderRadius: '5px', padding: '20px 60px', height: '450px'}}>
        <Row>
            <Col className="d-flex justify-content-center">
                <h2 className="mb-2">Please Register</h2>
            </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group  className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                ref={nameRef}
                type="text"
                name="name"
                placeholder="Your Name"
              />
              {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
            </Form.Group>
          </Col>
          </Row>
          <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                ref={phoneRef}
                type="text"
                name="phone"
                placeholder="Your Mobile Number"
              />
              {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Enter email"
              />
              {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                ref={confirmPasswordRef}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="">
          <p>
            Already registered? <Link to="/login">Please login.</Link>
          </p>
        </Form.Group>
       <div className="d-flex justify-content-end">
       <Button className="" variant="primary" type="submit">
          Register
        </Button>
       </div>
      </Form>
    </div>
  );
};

export default Register;
