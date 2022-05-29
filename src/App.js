import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/Pages/About/About";
import Blog from "./components/Pages/Blog/Blog";
import Contact from "./components/Pages/Contact/Contact";
import Home from "./components/Pages/Home/Home";
import MainFoodMenu from "./components/Pages/MainFoodMenu/MainFoodMenu";
import Header from "./components/Shared/Header/Header";
import Login from "./components/Shared/Login/Login";
import Register from "./components/Shared/Register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<MainFoodMenu />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
