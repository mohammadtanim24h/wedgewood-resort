import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import googleLogo from "../../images/google.svg";
import useFirebase from "../../hooks/useFirebase";
import { Link } from "react-router-dom";
import {
    useAuthState,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
    const { handleGoogleLogin } = useFirebase();
    const [user] = useAuthState(auth);
    const [signInWithEmailAndPassword, userObj, , error] = useSignInWithEmailAndPassword(auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div>
            {user ? (
                <h1 className="text-center section-title my-5">
                    You are Succesfully logged in!
                </h1>
            ) : (
                <div>
                    <h2 className="section-title text-center display-6 mt-3">
                        Login
                    </h2>
                    <div className="w-25 mx-auto form-style">
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    onBlur={handleEmailBlur}
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    onBlur={handlePasswordBlur}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>
                            <div className="text-center">
                                <Button
                                    onClick={handleLogin}
                                    className="submit-btn"
                                    variant="primary"
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </div>
                            <p className="my-2 text-center">
                                New to Wedgewood Resort?{" "}
                                <Link
                                    className="switch-auth-method"
                                    to="/signup"
                                >
                                    Create New Account
                                </Link>
                            </p>
                        </Form>
                        <hr className="mb-4" />
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
            )}
        </div>
    );
};

export default Login;
