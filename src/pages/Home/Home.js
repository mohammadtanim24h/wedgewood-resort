import React, { useEffect, useState } from "react";
import "./Home.css";
import Room from "./Room/Room";

const Home = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch("rooms.json")
            .then((res) => res.json())
            .then((data) => setRooms(data));
    }, []);
    return (
        <div>
            <div className="banner">
                <div className="banner-text">
                    <h2 className="banner-title">Wedgewood Resort</h2>
                    <p>
                        Set in Italy's northernmost region, Wedgewood Resort in
                        South Tyrol <br /> is an ideal place to escape the
                        stress of the modern world. <br /> To get there, you'll
                        have to travel via cable car as the resort is car-free.{" "}
                    </p>
                    <button className="btn btn-outline-light px-4 py-2">
                        See More
                    </button>
                </div>
            </div>
            <div className="container mt-5 vh-100">
                <h1 className="display-5 text-center section-title">Our Rooms</h1>
                <div className="row g-5">
                    {rooms.map((room) => (
                        <Room room={room} key={room.id}></Room>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
