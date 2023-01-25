import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Portfolio from "../pages/Portfolio";
import Pricing from "../pages/Pricing";
import MainRoot from "../components/MainRoot";

const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"portfolio",
                element:<Portfolio/>
            },
            {
                path:"pricing",
                element:<Pricing/>
            },
            {
                path:"*",
                element:<NotFound/>
            },
        ]
    }
]
export default ROUTES