


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';

import NavbarBottomMobile from './navbarBottom';

import LogoTop from './logo';


import MainPage from './pages/mainpage';
import InMainPage from './pages/inMainPage'; // Yo'lni to'g'ri yozing


//Map


import PageOne from './pages/page1';
import LocalMap from "./pages/map"


import PageTwo from './pages/page2';
import InPageTwo from './pages/inPage2';



import PageThree from './pages/page3';
import InPageThree from './pages/inPage3';



import PageFour from './pages/page4';
import InPageFour from './pages/inPage4';


import PageFive from './pages/page5';
import InPageFive from './pages/inPage5';



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
          <Route path="/inmainpage" element={<InMainPage />} />

          <Route path="/page1" element={<PageOne />} />
          <Route path="/page1/map" element={<LocalMap />} />


          <Route path="/page2" element={<PageTwo />} />
          <Route path="/page2/house" element={<InPageTwo />} />


          <Route path="/page3" element={<PageThree />} />
          <Route path="/page3/star" element={<InPageThree />} />





          <Route path="/page4" element={<PageFour />} />
          <Route path="/page4/in" element={<InPageFour />} />

          <Route path="/page5" element={<PageFive />} />
          <Route path="/page5/in" element={<InPageFive />} />
          

          <Route path="/page6" element={<PageSix />} />
          <Route path="/page6/map" element={<LocalMap />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}