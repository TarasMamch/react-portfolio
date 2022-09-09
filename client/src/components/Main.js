import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import AboutMe from './pages/AboutMe'
import Work from './pages/Work'

export default function Main() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Work') {
            return <Work />;
        }
        //return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}