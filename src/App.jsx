import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import FinishedProjects from './pages/Projects/FinishedProjects';
import OngoingProjects from './pages/Projects/OngoingProjects';
import RestorationProjects from './pages/Projects/RestorationProjects';
import ErrorPage from './pages/Error/ErrorPage';
import Careers from './pages/Careers/Careers';
import ScrollTopButton from './components/ScrollTopButton/ScrollTopButton';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>} errorElement={<ErrorPage/>}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="projects" element={<Projects/>}>
        <Route path='/projects/finished-projects' element={<FinishedProjects/>}/>
        <Route path='/projects/ongoing-projects' element={<OngoingProjects/>}/>
        <Route path='/projects/restoration-projects' element={<RestorationProjects/>} />
      </Route>
      <Route path="careers" element={<Careers/>} />
      <Route path="contact" element={<Contact/>} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ScrollTopButton/>
    </div>
    );
}

export default App;