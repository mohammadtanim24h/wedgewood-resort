import React from "react";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    };
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/booking">Booking</Link>
                <Link to="/suites">Suites</Link>
                <Link to="/restaurant">Restaurant</Link>
                <Link to="/about">About</Link>
                {user ? (
                    <button onClick={handleLogOut} className="logout-btn">
                        Logout
                    </button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
