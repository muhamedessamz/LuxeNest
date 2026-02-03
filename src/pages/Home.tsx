import React from 'react';
import Hero from '../components/sections/Hero';
import CategoriesGrid from '../components/sections/CategoriesGrid';
import BestSellers from '../components/sections/BestSellers';
import FeaturesAndServices from '../components/sections/FeaturesAndServices';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <CategoriesGrid />
            <BestSellers />
            <FeaturesAndServices />
        </>
    );
};

export default Home;
