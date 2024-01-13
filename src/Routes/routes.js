import CurrencyPage from "../Pages/CurrencyPage";
import InvitationPage from "../Pages/InvitationPage";
import ModalPage from "../Pages/ModalPage";
import NotFound from "../Pages/NotFound";
import PhotoPage from "../Pages/PhotoPage";
import QuizPage from "../Pages/QuizPage";


export const routes = [
    {path: "/", component: QuizPage,},
    {path: "/currency", component: CurrencyPage},
    {path: "/invitation", component: InvitationPage},
    {path: "/modal", component: ModalPage},
    {path: "/photo", component: PhotoPage},
    {path: "*", component: NotFound}
]