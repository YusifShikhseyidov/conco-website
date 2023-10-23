import { Link, useRouteError } from "react-router-dom"
import './ErrorPage.css'

export default function ErrorPage() {

  const error = useRouteError()
  console.error(error)

  return (
    <div className="error-page">
      <div className="error-page-content">
        <div>
          <p><b>{error.statusText || errormessage}</b></p>
          
          <p><b>Sorry, such a page doesn't exist</b></p>
        </div>
        
        <div><Link to="/">Go to HomePage</Link></div>
      </div>
    </div>
  )
}
