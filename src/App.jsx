import {Route, Routes, Link} from "react-router-dom";
import { routes } from "./Routes/routes";
import './styles/index.scss'

function App() {

  return (
    <div className="App">
      <header className="head">
        <Link className="head__link" to='/'>Quiz</Link>
        <Link className="head__link" to='/modal'>Modal</Link>
        <Link className="head__link" to='/photo'>Photo</Link>
        <Link className="head__link" to='/invitation'>Invitation</Link>
        <Link className="head__link" to='/currency'>Currency</Link>
      </header>
        <Routes>
          {routes.map(route =>
            <Route 
              path={route.path}
              Component={route.component}
              key={route.path}
            />
          )}
        </Routes>
    </div>
  )
}

export default App;
