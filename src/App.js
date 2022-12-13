import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import FoodSingle from "./components/Pages/FoodSingle/FoodSingle";
import Footer from "./components/Pages/Home/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import MainFoodMenu from "./components/Pages/MainFoodMenu/MainFoodMenu";
import Reviews from "./components/Pages/Reviews/Reviews";
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
          <Route path="menu/:menuItem" element={<FoodSingle />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
