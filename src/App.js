import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Header from "./pages/Shared/Header/Header";
import SignUp from "./pages/SignUp/SignUp";
import Booking from "./pages/Booking/Booking";
import RequireAuth from "./pages/RequireAuth/RequireAuth";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route
                    path="/booking"
                    element={
                        <RequireAuth>
                            <Booking></Booking>
                        </RequireAuth>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
