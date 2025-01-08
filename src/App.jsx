import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom"; // فقط هنا

import HomePage from "./pages/home-page/homePage";
import "./i18n"; // استيراد إعدادات الترجمة
import Contact from "./pages/contact/contact";
import About from "./pages/about-us/aboutUs";
import Proteen from "./pages/proTeen/proTeen";
import Classic from "./pages/classic/classic";
import Mom from "./pages/mom/mom";
import Becontrol from "./pages/becontrol/becontrol";
import Ultratin from "./pages/ultra-thin/ultraThin";
import ProductsPage from "./pages/productsPage/productsPage";
import Teen from "./pages/teenager/teenager";
import Meno from "./pages/meno/meno";
import All from "./pages/all/all";
import Training from "./pages/tips-training/training";
import Men from "./pages/tips-men/men";
import Stretching from "./pages/tips-stretching/stretching";
import Hygiene from "./pages/tips-hygiene/hygiene";
import Tee from "./pages/tips-teenage/tee";
import Que from "./pages/tips-5-questions/que";
import Sani from "./pages/tips-sani/sani";
import No from "./pages/tips-no/no";
import Cycle from "./pages/tips-men-cycle/cycle";
import How from "./pages/tips-how-to-be-pre/how";
import Pms from "./pages/tips-pms/pms";
import Ovu from "./pages/tips-ovulation/ovu";
import Leu from "./pages/tips-leu/leu";
import Why from "./pages/tips-menopause-why/why";
import Menomen from "./pages/tips-menopause-men/meno-men";
import Child from "./pages/tips-childbirth/childbirth";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home-Page" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/pro-teen" element={<Proteen />} />
          <Route path="/classic" element={<Classic />} />
          <Route path="/mom" element={<Mom />} />
          <Route path="/becontrol" element={<Becontrol />} />
          <Route path="/ultra-thin" element={<Ultratin />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/menopause" element={<Meno />} />
          <Route path="/for-all-of-us" element={<All />} />
          <Route path="/teenager" element={<Teen />} />
          <Route path="/tips-teenager-men" element={<Men />} />
          <Route path="/tips-teenager-stretching" element={<Stretching />} />
          <Route path="/tips-teenager-training" element={<Training />} />
          <Route path="/tips-teenager-hygiene" element={<Hygiene />} />
          <Route path="/tips-teenager-tee" element={<Tee />} />
          <Route path="/tips-teenager-que" element={<Que />} />
          <Route path="/tips-teenager-sani" element={<Sani />} />
          <Route path="/tips-teenager-no" element={<No />} />
          <Route path="/tips-teenager-cycle" element={<Cycle />} />
          <Route path="/tips-teenager-how" element={<How />} />
          <Route path="/tips-teenager-pms" element={<Pms />} />
          <Route path="/tips-teenager-ovu" element={<Ovu />} />
          <Route path="/tips-menopause-leu" element={<Leu />} />
          <Route path="/tips-menopause-why" element={<Why />} />
          <Route path="/tips-menopause-men" element={<Menomen />} />
          <Route path="/tips-all-childbirth" element={<Child />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
