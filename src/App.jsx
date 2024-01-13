import {Route, Routes, Link} from "react-router-dom";
import CurrencyPage from "./Pages/CurrencyPage";
import InvitationPage from "./Pages/InvitationPage";
import ModalPage from "./Pages/ModalPage";
import NotFound from "./Pages/NotFound";
import PhotoPage from "./Pages/PhotoPage";
import QuizPage from "./Pages/QuizPage";
import './styles/index.scss'
import { routes } from "./Routes/routes";

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
