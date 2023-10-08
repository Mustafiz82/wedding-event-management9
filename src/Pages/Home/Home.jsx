import React from 'react';
import Banner from '../../Component/Header/Banner';
import Services from '../../Component/Services/Services';
import Footer from '../../Component/Footer/Footer';
import WhyUs from '../../Component/WhyUs/WhyUs';
import PerfectWedding from '../../Component/perfectWedding/PerfectWedding';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <PerfectWedding></PerfectWedding>
            <WhyUs></WhyUs>

            
        </div>
    );
};

export default Home;