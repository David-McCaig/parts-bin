import HomePage from "./Pages/HomePage/HomePage.jsx"
import UploadPage from "./Pages/UploadPage/UploadPage.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx"
import BikesPage from "./Pages/BikesPage/BikesPage"
import ProductDetailsPage from "./Pages/productDetailsPage/ProductDetailsPage"
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/bikes" element={<BikesPage />} />
          <Route path='/product/:id' element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      </>
  );
}

export default App;
