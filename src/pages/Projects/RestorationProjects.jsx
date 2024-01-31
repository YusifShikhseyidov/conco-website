import Footer from "../../components/Footer/Footer";
import SingleProject from "../../components/SingleProjectComponent/SingleProject";

import {
  projectImage23,
  projectImage24,
  projectImage25,
  projectImage26,
  projectImage27,
  projectImage28,
  projectImage29,
  projectImage30,
} from "./projectsImages";

export default function RestorationProjects() {
  const bakiXanlarEvi = [projectImage23, projectImage24, projectImage25];
  const shushaBinaKonservasiya = [projectImage26, projectImage27];
  const shushaQalaDivari = [projectImage28, projectImage29, projectImage30];

  return (
    <>
      <header className="projects-page_header">
        <h1 className="main-heading">Restavrasiya Layiheleri</h1>
      </header>
      <main className="projects-page_main-content">
        
        <SingleProject title="Bakı Xanlar Evi" photos={bakiXanlarEvi} />

        <SingleProject
          title="Şuşa şəhərində tarixi binanın müvəqqəti konservasiyası"
          photos={shushaBinaKonservasiya}
        />
        
        <SingleProject
          title="Şuşa şəhərində yerləşən,  XVIII əsrə aid edilən, ölkə əhəmiyyətli tarix və mədəniyyət abidəsi olan Qala Divarının bərpası"
          photos={shushaQalaDivari}
        />

      </main>
      <Footer />
    </>
  );
}
