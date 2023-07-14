import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Main from "./pages/Main";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import BookMarkList from "./pages/BookMarkList";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/list" element={<ProductList />} />
          <Route path="/bookmark" element={<BookMarkList />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
