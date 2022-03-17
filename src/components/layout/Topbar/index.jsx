import { Link } from "react-router-dom";

import './_topbar.css';

const Topbar = (props) => {
    return <>
        {/* TODO: style nav header */}
        <nav className="nav-bar">
            <Link className="nav-title" to="/"><h1>Areebs Portfolio</h1></Link>
            <ul>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/about">About Me</Link></li>
            </ul>
        </nav>
    </>
}

export default Topbar;