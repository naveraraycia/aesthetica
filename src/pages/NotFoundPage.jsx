import { Link } from "react-router-dom"

function NotFoundPage() {
  
  return (
    <div id="not-found" className="bg-gray d-flex align-items-center">
      <div className="container d-flex align-items-center flex-column">
        <h1 className="text-primary">Page not found</h1>
        <p className="text-lighterGray mt-2">The page you are trying to visit does not seem to exist</p>
        
        <p className="text-lighterGray">Go back <Link to={'/'} className="text-primary">home</Link></p>
      </div>
    </div>
  )
}

export default NotFoundPage