import { Link, useLocation } from "react-router-dom"
import './Breadcrumbs.css'

export default function Breadcrumbs() {

  const location = useLocation()

  let currentLink = ''

  const crumbs = location.pathname.split('/').filter(crumb=> crumb !== '').map((crumb, index) => {
    currentLink += `/${crumb}`

    

    if(index !== 0){
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    }
    
    return(
      <div className="crumb" key={crumb}>
        <Link to={currentLink}>{crumb}</Link>
      </div>
    )
  })

  return (
    <div className={`breadcrumbs ${location.pathname==='/' ? 'dontShowBreadcrumbOnHomePage' : ''}`}>
      {crumbs}
    </div>
  )
}
