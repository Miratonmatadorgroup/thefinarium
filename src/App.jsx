import './App.css'
import {Login} from "./pages/Auth/Login.jsx";
import {Route, Routes} from "react-router-dom";
import {Signup} from "./pages/Auth/Signup.jsx";
import {AddressDetails} from "./pages/Auth/AddressDetails.jsx";
import {Identity} from "./pages/Auth/Identity.jsx";
import {Home} from "./pages/Home/Home.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/address" element={<AddressDetails />} />
            <Route path="/identity" element={<Identity />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}

export default App
