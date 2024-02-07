import SingleProject from "../../components/SingleProjectComponent/SingleProject";
import Footer from "../../components/Footer/Footer";
import useFetch from "../../components/hooks/useFetch";
// U can use react-spring library for smooth transition appear and diisappear of the divs for extra photos example of which is at codesandbox.io

export default function FinishedProjects() {
  const {data, loading} = useFetch("/finished-projects?populate=*")

  return (
    <>
      <header className="projects-page_header">
        <h1 className="main-heading">Təhvil verilmiş layihələr</h1>
      </header>

      <main className="projects-page_main-content">
        {loading && <div className="loader"></div>}
        {!loading && data?.map((obj)=>{
          const imgs = obj.attributes.finished_project_imgs.data.map((img)=>img.attributes.url)
          return (
            <SingleProject 
              key={obj.id}
              title={obj.attributes.finished_project_heading} 
              photos={imgs} 
            />
          )
        })}

      </main>
      <Footer />
    </>
  );
}
