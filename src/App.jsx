import { Route, Routes, Outlet } from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import './App.css'



const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} >
            
            </Route>
        </Routes>
    )
};

export default App;
