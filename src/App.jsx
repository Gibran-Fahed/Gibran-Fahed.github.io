import {BrowserRouter as Router} from "react-router-dom"

import {About, Experience, Hero, Navbar, Works} from "./components"
import {lazy} from "react";
import LazyLoadComponent from "./components/LazyLoadComponent.jsx";

const TechLazy = lazy(() => import ("./components/Tech.jsx"))
const ContactLazy = lazy(() => import ("./components/Contact.jsx"))
const StarsCanvasLazy = lazy(() => import ("./components/canvas/Stars.jsx"))


const App = () => {
    return (
        <Router>
            <div className="relative z-0 bg-black">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar/>
                    <Hero/>
                </div>
                <About/>
                <Experience/>
                <LazyLoadComponent>
                    <TechLazy/>
                </LazyLoadComponent>
                <Works/>
                <div className="relative z-0">
                    <LazyLoadComponent>
                        <ContactLazy/>
                        <StarsCanvasLazy/>
                    </LazyLoadComponent>
                </div>
            </div>
        </Router>
    )
}

export default App