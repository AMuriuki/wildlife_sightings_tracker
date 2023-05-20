import React from "react";

export default function NavbarToggle() {
    return (
        <div className="toggle-icon-wrapper">
            <button className="btn navbar-toggler-humburger-icon navbar-vertical-toggle" data-bs-toggle="tooltip" data-bs-placement="left" aria-label="Toggle Navigation" data-bs-original-title="Toggle Navigation">
                <span className="navbar-toggle-icon">
                    <span className="toggle-line"></span>
                </span>
            </button>
        </div>
    )
}