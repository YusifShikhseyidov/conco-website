import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import FinishedProjects from "./pages/Projects/FinishedProjects";
import OngoingProjects from "./pages/Projects/OngoingProjects";
import RestorationProjects from "./pages/Projects/RestorationProjects";
import ErrorPage from "./pages/Error/ErrorPage";
import ScrollTopButton from "./components/ScrollTopButton/ScrollTopButton";
import Careers from "./pages/Careers/Careers";
import CareersLayout from "./pages/Careers/CareersLayout";
import Sponsors from "./components/Sponsors/Sponsors";
import AboutConco from "./components/AboutPageComponents/SectionOneAboutConco/AboutConco";
import OurValue from "./components/AboutPageComponents/SectionFourOurValue/OurValue";
import Certificates from "./components/AboutPageComponents/SectionFiveCertificates/Certificates"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="haqqımızda" element={<About />} >
        <Route path="bizim-haqda" element={<AboutConco />} />
        <Route
          path="sponsorlar"
          element={<Sponsors />}
        />
        <Route
          path="niyə-biz"
          element={<OurValue />}
        />
        <Route
          path="sertifikatlar"
          element={<Certificates />}
        />
      </Route>
      <Route path="layihələr" element={<Projects />}>
        <Route
          path="/layihələr/təhvil-verilmiş-layihələr"
          element={<FinishedProjects />}
        />
        <Route
          path="/layihələr/davam-edən-layihələr"
          element={<OngoingProjects />}
        />
        <Route
          path="/layihələr/bərpa-layihələri"
          element={<RestorationProjects />}
        />
      </Route>
      <Route path="vakansiyalar" element={<CareersLayout />}>
        <Route index element={<Careers />} />
      </Route>
      <Route path="əlaqə" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ScrollTopButton />
    </div>
  );
}

export default App;
