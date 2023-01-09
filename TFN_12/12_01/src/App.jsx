import { Routes, Route, Outlet, Link } from "react-router-dom";

import About from './components/About'
import Services from './components/Services'
import NoMatch from './components/NoMatch'
import Home from './components/Home'
import Contact from './components/Contact'
import DE from './components/Contact/DE'
import PL from './components/Contact/PL'
import US from './components/Contact/US'

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="contact" element={<Contact />} >
                        <Route path="DE" element={<DE />} />
                        <Route path="PL" element={<PL />} />
                        <Route path="US" element={<US />} />
                    </Route>
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    )

}

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                        <ul>
                            <li><Link to="/contact/de">de</Link></li>
                            <li><Link to="/contact/pl">pl</Link></li>
                            <li><Link to="/contact/us">us</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}