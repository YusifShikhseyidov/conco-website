import MainServices from "../SectionTwoMainServices/MainServices";
import { mainServices } from "../../../pages/About/services";
// the hook to fetch data
import useFetch from "../../hooks/useFetch";
// styles
import "./AboutConco.css"

// import react-awesome-reveal Zoom effect
import { Zoom } from "react-awesome-reveal";

import { useLocale } from "../../LocaleContext";

export default function AboutConco() {
  const {locale} = useLocale()

  // fetch data using useFetch hook for relevant collection-type
  const {data,loading} = useFetch(`/about-us-collection-types?locale=${locale}&populate=*`)
  console.log(data)

  // define title for main services component
  const title = "Əsas Fəaliyyət İstiqamətləri";
  
  return (
    <section className="about-page_section-1">
      {loading && <div className="loader"></div>}
      {!loading && data && (
        <>
          {data.map((aboutuscoverimg)=>(
            <div className="about-page_company-cover" key={aboutuscoverimg.id}>
              <img src={aboutuscoverimg.attributes.conco_about_us_cover_img.data.attributes.url} loading="lazy" alt="company-cover" />
            </div>

          ))}
          <div className="about_page-about_us-keeper">
            <h1 className="about-page_title">Haqqımızda</h1>

            {data.map((aboutus)=>(
              <p className="about-page_about-conco" key={aboutus.id}>
                {aboutus.attributes.conco_about_us}
              </p>

            ))}

            <hr />
            <Zoom triggerOnce={true}>
              <p className="about-page_our-philosophy_1">hədsiz mükəmməllik</p>
            </Zoom>
            <p className="about-page_our-philosophy_2">
              bizim iş fəlsəfəmizdir
            </p>
            <hr />

            <MainServices title={title} mainServices={mainServices} />
          </div>
        </>
      )}
    </section>
  );
}
