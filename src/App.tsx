import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OrganizerRegister from "./pages/OrganizerRegister";
import OrganizerLogin from "./pages/OrganizerLogin";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organizer/register" element={<OrganizerRegister />} />
        <Route path="/organizer/login" element={<OrganizerLogin />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
