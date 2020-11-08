import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './About.scss';
const About = () => {
  return (
    <>
      <Navbar />

      <h1 className="about">About This App</h1>
      <div className="desc-container">
        <p className="desc">
          Simple React app that calls the{' '}
          <a
            href="https://developers.giphy.com/"
            target="_blank"
            rel="noreferrer"
          >
            Giphy API
          </a>
        </p>
      </div>
    </>
  );
};
export default About;
