import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import ParticleBackground from "./components/Particles/Particles";
import Products from "./pages/Product/Products";
import Pricing from "./pages/Pricing/Pricing";
import Resources from "./pages/Resources";
import AboutUs from "./pages/AboutUs";
import BookDemo from "./pages/BookDemo";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Content />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
