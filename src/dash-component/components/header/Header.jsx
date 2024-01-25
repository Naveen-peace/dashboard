// Header.jsx
import React, { useState, useEffect } from 'react';
import '../../asset/css/style.css';
import icon from '../../asset/icon/icon (2).png';
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [showScroll, setShowScroll] = useState(false);
    const location = useLocation();

    const handleShowNavbar = () => {
        setShowMenu(!showMenu);
        const navBarTwo = document.querySelector('.nav-bar-two');
        navBarTwo.classList.toggle('active', !showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    useEffect(() => {
        // Function to handle scroll and set active link
        const handleScrollAndActiveLink = () => {
            const sections = document.querySelectorAll("section[id]");
            const scrollY = window.pageYOffset;

            sections.forEach((current) => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute("id");

                const navLink = document.querySelector(`.nav-bar-two a[href*=${sectionId}]`);

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add("active-link");
                } else {
                    navLink.classList.remove("active-link");
                }
            });
        };

        // Add event listeners for scroll and location change
        window.addEventListener("scroll", handleScrollAndActiveLink);
        handleScrollAndActiveLink(); // Initialize on component mount

        return () => {
            window.removeEventListener("scroll", handleScrollAndActiveLink);
        };
    }, [location]);

    const handleNavItemClick = (pathname) => {
        // Close the menu and handle active link
        closeMenu();

        // Add the 'active-link' class to the clicked navigation item
        const navLink = document.querySelector(`.nav-bar-two a[href*=${pathname}]`);
        if (navLink) {
            const activeLinks = document.querySelectorAll('.nav-bar-tow-hover.active');
            activeLinks.forEach((link) => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    };

    // Function to handle scroll up button click
    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <nav className={`nav-background`}>
                <div className="lol-container">
                    <div className="nav-bar">
                        <div className="nav-bar-one">
                            <a href="/dashboard">
                                <img style={{ width: '50px', height: '50px' }} src={icon} alt="" />
                            </a>
                            <div className={`nav-bar-two ${showMenu && 'active'}`}>
                                <Link to={'/dashboard'} onClick={() => handleNavItemClick('/dashboard')} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/dashboard' ? 'active' : ''}`}>Home</Link>
                                <Link to={'/about-page'} onClick={() => handleNavItemClick('/about-page')} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/about-page' ? 'active' : ''}`}>About</Link>
                                <Link to={'/skill-page'} onClick={() => handleNavItemClick('/skill-page')} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/skill-page' ? 'active' : ''}`}>Skill</Link>
                                <Link to={'/project-page'} onClick={() => handleNavItemClick('/project-page')} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/project-page' ? 'active' : ''}`}>Project</Link>
                                <Link to={'/contact-page'} onClick={() => handleNavItemClick('/contact-page')} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/contact-page' ? 'active' : ''}`}>Contact</Link>
                            </div>
                        </div>
                        <button className="menu-button" onClick={handleShowNavbar}>
                            <Icon icon="typcn:th-menu-outline" width="40" height="40" />
                        </button>
                    </div>
                </div>
            </nav>
            <div id="scroll-up" onClick={handleScrollUp} className={showScroll ? 'show-scroll' : ''}>
                <Icon icon="bi:arrow-up" width="30" height="30" />
            </div>
        </div>
    );
}

export default Header;
