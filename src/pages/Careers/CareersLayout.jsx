import { Outlet } from "react-router-dom";
import "./Careers.css";

import useFetch from "../../components/hooks/useFetch"


export default function CareersLayout() {
  const {data, loading} = useFetch("/vacancies")


  return (
    <>
      <header className="careers-layout-header">
        <h1>
          Vakansiyalar
        </h1>
        {data.length===0 && !loading && <p>Hal-hazırda vakansiya mövcud deyil</p>}
      </header>
      <main className="careers-layout-main">
        <Outlet/>
      </main>
    </>
  )
}
