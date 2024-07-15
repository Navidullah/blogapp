import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Footer from "./components/Footer.jsx";
import Write from "./pages/Write.jsx";
import Login from "./pages/Login.jsx";
import Logout from "./pages/Logout.jsx";
import Contact from "./pages/Contact.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import Signin from "./pages/Signin.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/blogpage" element={<BlogPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
