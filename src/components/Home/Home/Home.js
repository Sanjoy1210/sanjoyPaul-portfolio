import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <div id="home">
      <Navigation />
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;