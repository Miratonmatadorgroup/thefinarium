import ErrorPage from "../components/error/ErrorPage";
import HomePage from "../pages/GeneralPages/HomePage";



export const GeneralPages = [
    { path:`/`, component: HomePage },
    { path: '*', component: ErrorPage },
]