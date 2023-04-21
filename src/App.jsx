import ScrollToTop from "Components/ScrollToTop";
import { Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Layout from "./Components/Layout/Layout";
import "./Styles/App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Gallery from "./Pages/Gallery/Gallery";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound";
import Plans from "./Pages/Plans/Plans";
import Trainers from "./Pages/Trainers/Trainers";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
