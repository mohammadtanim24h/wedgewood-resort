import React from "react";
import "./Home.css";
import banner from "../../images/banner-hotel.jpg";

const Home = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h2 className="banner-title">Wedgewood Resort</h2>
                <p>Set in Italy's northernmost region, Wedgewood Resort in South Tyrol <br /> is an ideal place to escape the stress of the modern world. <br /> To get there, you'll have to travel via cable car as the resort is car-free. </p>
                <button className="btn btn-outline-light px-4 py-2">See More</button>
            </div>
        </div>
    );
};

export default Home;
