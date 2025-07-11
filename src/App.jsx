import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs";
import BookDemo from "./pages/BookDemo";
import Pricing from "./pages/Pricing/Pricing";
import Products from "./pages/Product/Products";
import Resources from "./pages/Resources";

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
