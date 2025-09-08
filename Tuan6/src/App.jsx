
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import OrderList from "./components/OrderList";
import { OrderProvider } from "./components/OrderContext";

function App() {
  return (
    <OrderProvider>
      <Router>
        <Header />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <OrderList/>
        </div>
        <Footer />
      </Router>
    </OrderProvider>
  );
}

export default App;


