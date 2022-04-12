import React from "react";
import { Button, Form } from "react-bootstrap";

const Booking = () => {
    return (
        <div className="my-3">
            <h1 className="section-title text-center">This is Booking Section</h1>
            <h5 className="text-secondary text-center my-3">Please Provide necessary information</h5>
            <div className="w-25 mx-auto form-style">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Your Name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Your Current Address"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Phone Number"
                        />
                    </Form.Group>
                    <div className="text-center">
                        <Button
                            className="submit-btn"
                            variant="primary"
                            type="submit"
                        >
                            Confirm Booking
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Booking;
