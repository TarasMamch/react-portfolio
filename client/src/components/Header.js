import React from 'react';
import Axios from "axios"

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <div className="header-name">Taras Mamchits</div>
            <div className="header-links">
                <a
                    href="#about-me"
                    onClick={() => handlePageChange('AboutMe')}
                    className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </a>
                <a
                    href="#work"
                    onClick={() => handlePageChange('Work')}
                    className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                >
                    Work
                </a>
                <a href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </div>
        </header>
    )
}

export default Header;