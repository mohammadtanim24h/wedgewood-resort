import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import googleLogo from "../../images/google.svg";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
    const { handleGoogleLogin } = useFirebase();
    return (
        <div>
            <h2 className="section-title text-center display-6 mt-3">Login</h2>
            <div className="w-25 mx-auto form-style">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="text-center">
                        <Button
                            className="submit-btn"
                            variant="primary"
                            type="submit"
                        >
                            Login
                        </Button>
                    </div>
                    <hr className="my-4" />
                </Form>
                <div className="text-center">
                    <button onClick={handleGoogleLogin} className="login-google">
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

export default Login;
