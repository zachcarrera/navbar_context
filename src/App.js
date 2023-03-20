import "./App.css";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper";
import UserContext from "./context/UserContext";
import { useState } from "react";

function App() {
    const [userName, setUserName] = useState("");
    return (
        <div className="App">
            <UserContext.Provider value={[userName, setUserName]}>
                <Wrapper>
                    <Navbar />
                    <FormWrapper />
                </Wrapper>
            </UserContext.Provider>
        </div>
    );
}

export default App;
