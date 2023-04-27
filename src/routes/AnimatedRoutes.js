import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import MainGallery from "../pages/MainGallery";
import Contact from "../pages/Contact";
import Studio from "../pages/gallery/Studio";
import Reportage from "../pages/gallery/Reportage";
import Travel from "../pages/gallery/Travel";
import Animals from "../pages/gallery/Animals";
import Business from "../pages/offer/Business";
import Image from "../pages/offer/Image";
import Wedding from "../pages/offer/Wedding";
import NonCommercialReportage from "../pages/offer/NonCommercialReportage";
import CommercialReportage from "../pages/offer/CommercialReportage";
import webpSupported from "../helpers/webpSupport";
import { AnimatePresence } from "framer-motion";
import ErrorPage from "../pages/ErrorPage";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div className="page-container">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="galeria" element={<MainGallery />} />
          <Route path="kontakt" element={<Contact />} />
          <Route
            path="studio-portret"
            element={<Studio webpSupported={webpSupported} />}
          />
          <Route
            path="reportaz"
            element={<Reportage webpSupported={webpSupported} />}
          />
          <Route
            path="travel"
            element={<Travel webpSupported={webpSupported} />}
          />
          <Route
            path="zwierzeta"
            element={<Animals webpSupported={webpSupported} />}
          />
          <Route
            path="sesja-biznesowa"
            element={<Business webpSupported={webpSupported} />}
          />
          <Route
            path="sesja-wizerunkowa"
            element={<Image webpSupported={webpSupported} />}
          />
          <Route
            path="reportaz-slubny"
            element={<Wedding webpSupported={webpSupported} />}
          />
          <Route
            path="reportaz-okolicznosciowy"
            element={<NonCommercialReportage webpSupported={webpSupported} />}
          />
          <Route
            path="reportaz-firmowy"
            element={<CommercialReportage webpSupported={webpSupported} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
