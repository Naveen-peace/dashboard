import React from 'react'
import Header from '../header/Header'
import naveenimg from '../../asset/image/naveen-img.jpeg'
import PdfDownloader from '../resumepdf/PdfDownloader'
import { Icon } from '@iconify/react';
import Steeperstudy from '../steeperstudy/Steeper'
import Footer from '../footer/Footer';



function About() {
  return (
    <div>
      <Header />
      <div className="lol-container">
        <div className="naveen-about">
          <h2>About Me</h2>
          <h3>My Introduction</h3>
        </div>
        <div className="naveen-about-1">
          <div>
            <img style={{ width: '250px', height: '280px', borderRadius: '10px' }} src={naveenimg} alt="myimage" />
          </div>
          <div className="naveen-about-sub">
            <h4>👋 Hello, I'm Naveen Kumar.S, a dedicated and aspiring frontend developer currently pursuing my B.Tech in IT. Eager to venture into the dynamic world of web development, I am enrolled in the MERN FullStack Developer course to hone my skills and broaden my knowledge.</h4>
            <PdfDownloader />
          </div>
        </div>
        <div className="naveen-qualification">
          <div className="naveen-qualification-1">
            <h2>Qualification</h2>
            <h4>My journey</h4>
          </div>
          <div className="education-work">
            <h3><Icon icon="mdi:education-outline" /> Education</h3>  
          </div>
          <div className="naveen-education">
            {/* <h5><strong>DIPLOMA-MECH</strong> sri durgadevi polytechnic college, kavaraipettai</h5>
            <h5><strong>B.TECH IT</strong> st peter's university Avadi</h5>
            <h5><strong>MERN FullStack</strong> in FITA Academy Anna Nagar</h5> */}
            <Steeperstudy/>
          </div>
          <div className="naveen-work"></div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About