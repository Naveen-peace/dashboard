import React from 'react'
import '../asset/css/style.css'
import Header from '../components/header/Header'
import { Icon } from '@iconify/react';
// import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';

function DashBoard() {
    return (
        <div>
            <Header />
            <div>
                <div className="lol-container">
                    <div className='home-head'>
                        <div className="naveen-social">
                            <a href="https://www.linkedin.com/in/naveen-kumar-b6b1a6247/"><Icon icon="basil:linkedin-solid" width="30" height="30" /></a>
                            <a href="https://github.com/Naveen-peace"><Icon icon="mingcute:github-line" width="30" height="30" /></a>
                            <a href="https://www.instagram.com/dark_devil_joke/"><Icon icon="line-md:instagram" width="30" height="30" /></a>
                            <a href="https://www.facebook.com/profile.php?id=100009277052711"><Icon icon="ri:facebook-fill" width="30" height="30" /></a>
                        </div>
                        <div className='naveen-introduce'>
                            <h6>Hi, my name is</h6>
                            <h2>Naveen Kumar.S</h2>
                            <h3>I build things for web.</h3>
                            <h5>As a frontend developer, I am excited about the power of technology to shape compelling user experiences. Eager to contribute, collaborate, and learn, I'm ready to make an impact in the world of frontend development. Let's build something extraordinary together!</h5>
                            <a href="/contact-page">
                                <button>
                                    <Icon icon="gravity-ui:arrow-shape-turn-up-right" width="20" height="20" />
                                    <span to='/contact-page'>Contact me</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DashBoard