import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./SignUp.css";
import googleLogo from "../../images/google.svg";
import useFirebase from "../../hooks/useFirebase";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
    const { handleGoogleLogin } = useFirebase();
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameBlur = (e) => {
        setName(e.target.value);
    };

    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <h2 className="section-title text-center display-6 mt-3">Signup</h2>
            <div className="w-25 mx-auto form-style">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            onBlur={handleNameBlur}
                            type="text"
                            placeholder="Enter Your Name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="text-center">
                        <Button
                            onClick={handleSignUp}
                            className="submit-btn"
                            variant="primary"
                            type="submit"
                        >
                            Sign Up
                        </Button>
                    </div>
                    <p className="my-2 text-center">
                        Already Have an Account?{" "}
                        <Link className="switch-auth-method" to="/login">
                            Login
                        </Link>
                    </p>
                </Form>
                <hr className="my-4" />
                <div className="text-center">
                    <button
                        onClick={handleGoogleLogin}
                        className="login-google"
                    >
                        <img
                            className="img-fluid me-2"
                            src={googleLogo}
                            alt="google"
                        />
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
