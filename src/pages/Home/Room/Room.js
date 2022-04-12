import React from "react";
import { Card } from "react-bootstrap";
import "./Room.css";

const Room = ({ room }) => {
    const { name, img, price } = room;
    return (
        <div className="room col-12 col-md-6 col-lg-4">
            <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    <button className="book-btn">Book Now</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Room;
