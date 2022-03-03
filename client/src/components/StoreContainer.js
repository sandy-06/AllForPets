import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Homepage from '../pages/Homepage';

import Footer from './Footer';
import Signup from './SignUp'
import Login from './Login';


export default function StoreContainer() {
    const [currentPage, setCurrentPage] = useState('Homepage');

    const page = 'Homepage'

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Homepage') {
            return <Homepage />;
        }
        if (currentPage === 'Login') {
            return <Login />;
        }
        if (currentPage === 'Signup') {
            return <Signup />;
        }
        
    };

    return (
        <div>

            
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}></NavTabs>
            
            {renderPage()}
            <Footer></Footer>
        </div>

    );
} 
