import { Outlet } from "react-router-dom";
import "./Careers.css";

import useFetch from "../../components/hooks/useFetch"


export default function CareersLayout() {
  const {error} = useFetch("/vacancies")


  return (
    <>
      <header className="careers-layout-header">
        <h1>
          V<span>akansiy</span>alar
        </h1>
        {error && <p>Hal-hazirda vakansiya movcud deyil</p>}
      </header>
      <main className="careers-layout-main">
        <Outlet/>
      </main>
    </>
  )
}
