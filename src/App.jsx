


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';

import NavbarBottomMobile from './navbarBottom';

import LogoTop from './logo';


import MainPage from './pages/mainpage';
import PageOne from './pages/page1';
import PageTwo from './pages/page2';
import PageThree from './pages/page3';
import PageFour from './pages/page4';
import PageFive from './pages/page5';
import PageSix from './pages/page6';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <NavbarBottomMobile />
        <LogoTop/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/page1" element={<PageOne />} />
          <Route path="/page2" element={<PageTwo />} />
          <Route path="/page3" element={<PageThree />} />
          <Route path="/page4" element={<PageFour />} />
          <Route path="/page5" element={<PageFive />} />
          <Route path="/page6" element={<PageSix />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}