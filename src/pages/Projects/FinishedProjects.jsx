import SingleProject from "../../components/SingleProjectComponent/SingleProject";
import Footer from "../../components/Footer/Footer";
import {
  projectImage1,
  projectImage2,
  projectImage3,
  projectImage4,
  projectImage5,
  projectImage31,
  projectImage32,
  projectImage33,
} from "./projectsImages";
// U can use react-spring library for smooth transition appear and diisappear of the divs for extra photos example of which is at codesandbox.io

export default function FinishedProjects() {

  const xezerRayonuPhotos = [projectImage1,projectImage2,projectImage3, projectImage31, projectImage32,]
  const baltaliKendMektebiPhotos = [projectImage5,projectImage4,]

  return (
    <>
      <header className="projects-page_header">
        <h1 className="main-heading">Təhvil verilmiş layihələr</h1>
      </header>
      <main className="projects-page_main-content">
        
        <SingleProject 
          title="Xəzər rayonu Binə qəsəbəsinin ərazisində tikilən 1600 şagird yerlik məktəb" 
          photos={xezerRayonuPhotos} 
        />

        <SingleProject 
          title="Şəki ş. Baltalı kəndində tam orta məktəb" 
          photos={baltaliKendMektebiPhotos} 
        />

      </main>
      <Footer />
    </>
  );
}
