import React from "react";

export default function Navbar({ children }) {
    return (
        <nav className="navbar navbar-light navbar-vertical navbar-expand-xl">
            <div className="d-flex align-items-center">
                {children}
            </div>
            <div className="collapse navbar-collapse">
                <div className="navbar-vertical-content scrollbar">
                    <ul className="navbar-nav flex-column mb-3">
                        <li className="nav-item">
                            <a className="nav-link" href="/" role="button">
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-text ps-1">
                                        Sightings
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}