import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const Navbar = () => {
    const [userName] = useContext(UserContext);
    return <div className="navbar">{userName ? `Hello ${userName}!` : ""}</div>;
};

export default Navbar;
