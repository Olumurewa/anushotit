import React from 'react';
import Coming from '../../Coming/Coming';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

const Home =() => {
    return (
        <>
            <Navbar />
            <Coming content='WE ARE BUILDING SOMETHING ...'/>
            <Footer />
        </>
    )
};

export default Home;