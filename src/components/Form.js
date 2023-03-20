import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const Form = () => {
    const [userName, setUserName] = useContext(UserContext);
    return (
        <div className="form">
            <form>
                <label>Your Name:</label>
                <input
                    type="text"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
            </form>
        </div>
    );
};

export default Form;
