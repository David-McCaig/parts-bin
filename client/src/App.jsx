import HomePage from "./Pages/HomePage/HomePage.jsx"
import UploadPage from "./Pages/UploadPage/UploadPage.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx"
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
