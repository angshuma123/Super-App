import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerpages/Registerpages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
}

// You can replace Home with your actual home page component
const Home = () => {
    return (
        <div>
            <h1>Welcome to the Super App!</h1>
            {/* Add content for your home page */}
        </div>
    );
}

export default App;


