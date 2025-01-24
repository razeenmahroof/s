import React, { useState, useEffect } from 'react';

// import Login from './Login'; // Import your login page component

import LogoContainer from './LogoContainer'; // Import the LogoContainer component

import './Carousel.css'; // Import the CSS file




// Import images

import logo_icon from './Assets/icons/logo.png';

import group_icon from './Assets/icons/Group.png';

import group2_icon from './Assets/icons/Group2.png';

import group3_icon from './Assets/icons/Group3.png';

import group4_icon from './Assets/icons/Group4.png';

import group5_icon from './Assets/icons/Group5.png';

import group6_icon from './Assets/icons/Group6.png';

import group7_icon from './Assets/icons/Group7.png';

import group8_icon from './Assets/icons/Group3.1.png';




const CarouselComponent = () => {

  const [currentPage, setCurrentPage] = useState(0);




  // Define your pages here

  const pages = [

    {

      content: (

        <>

          <LogoContainer logo={logo_icon} />

          <div className="project_description-container">

            <h5 className="project-description">Provide <span style={{backgroundColor:'#b8e3c1'}}>Project Description</span></h5>

            <div className="image-container">

              <img style={{width: "23em"}} src={group_icon} alt="Group" />

            </div>

          </div>

        </>

      ),

      backgroundColor: '#E2F9FD',

    },

    {

      content: (

        <>

          <LogoContainer logo={logo_icon} />

          <div className="provide-image-container">

            <h5 className="provide-Image">Provide <span style={{backgroundColor:'#F2E4F5'}}>Image</span></h5>

          <div className="image-container">

            <img style={{width: "23em"}} src={group2_icon} alt="Group" />

          </div>

          </div>

        </>

      ),

      backgroundColor: '#E2F9FD',

    },

    {

      content: (

        <>

          <LogoContainer logo={logo_icon} />

          <div className="provide-Audios-container">

            <h5 className="Provide-Audios">Provide <span style={{backgroundColor:'#ffeef0'}}>Meeting Audios</span></h5>

          <div className="image-container1">

            <img src={group3_icon} alt="Group" style={{ width: '22em' }} />

            <img src={group8_icon} alt="Group3.1"  className="group3-1" style={{ position: 'absolute', top: 0, right: '-70px',width: '40px' }} />

          </div>

          </div>

        </>

      ),

      backgroundColor: '#E2F9FD',

    },

    {

      content: (

        <>

          <LogoContainer logo={logo_icon} />

          <div className="Project-Requirements-container">

            <h5 className="Project-Requirements">To generate <span style={{backgroundColor:"#dfbbdb"}}>Project Requirements</span></h5>

          <div className="image-container">

            <img style={{ width: '22.6em' }} src={group4_icon} alt="Group" />

          </div>

          </div>

        </>

      ),

      backgroundColor: '#E2F4EC',

    },

    {

      content: (

        <>

          <LogoContainer logo={logo_icon} />

          <div className="generate-code-container">

            <h5 className="generate-Code">To generate <span style={{backgroundColor:'#d6f0ff'}}>Code</span></h5>

          <div className="image-container">

            <img style={{ width: '22em' }} src={group5_icon} alt="Group" />

          </div>

          </div>

        </>

      ),

      backgroundColor: '#E2F4EC',

    },

    {

      content: (

        <>

          <LogoContainer logo={logo_icon} />

          <div className="user-stroies-container">

            <h5 className="generate-User-Stories">To generate <span style={{backgroundColor:'#ffd4d6'}}>User Stories</span></h5>

          <div className="image-container">

            <img style={{ width: '23em' }} src={group6_icon} alt="Group" />

          </div>

          </div>

        </>

      ),

      backgroundColor: '#E2F4EC',

    },

    {

      content: (

        <>

          <LogoContainer logo={logo_icon} />

          <div className="unit-test-cases-container">

            <h5 className="generate-Unit-Test-Cases">To generate Unit Test Cases</h5>

          <div className="image-container">

            <img style={{ width: '23.6em' }} src={group7_icon} alt="Group" />

          </div>

          </div>

        </>

      ),

      backgroundColor: '#E2F4EC',

    },

    {

      content: (

        <>

          <LogoContainer logo={logo_icon} />

          <div className="lots-more-container">

            <h5 className='lots-more'>And lots more..</h5>

          </div>

        </>

      ),

      backgroundColor: '#D6F0FF',

    },

  ];




  useEffect(() => {

    const intervalId = setInterval(() => {

      setCurrentPage((prevPage) => (prevPage === pages.length - 1 ? 0 : prevPage + 1));

    }, 3000); // Change page every 3 seconds




    return () => clearInterval(intervalId); // Cleanup the interval

  }, [pages.length]); // Run effect only once on component mount




  return (

    <div className="carousel-container" style={{ backgroundColor: pages[currentPage].backgroundColor, height: '100%' }}>

      <div className="left-side">

        {pages[currentPage].content}

      </div>

    </div>

  );

};




export default CarouselComponent;
