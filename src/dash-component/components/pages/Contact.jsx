import React, { useState } from 'react';
import Header from '../header/Header';
import '../../asset/css/style.css';
import { Icon } from '@iconify/react';
import emailjs from 'emailjs-com';
import PdfFile from '../../asset/naveen_resume.pdf'
import Footer from '../footer/Footer';

function Contact() {

  function downloadResume() {
    var link = document.createElement('a');
    link.href = PdfFile;
    link.download = 'Naveen-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    document.getElementById("email-submit").innerText = "Sending...";

    if (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.message !== ""
    ) {

      const serviceID = "service_3sfgxgr";
      const templateID = "template_98tqc99";


      emailjs.init("xmXfFAkt0lvm8ew0v");

      try {
        const response = await emailjs.send(serviceID, templateID, formData);

        setFormData({
          name: '',
          email: '',
          message: '',
        });

        document.getElementById("email-submit").innerHTML = `
          Send message
          <i class="uil uil-message button__icon"></i>`;

        alert("Your message sent successfully!");
      } catch (error) {
        document.getElementById("email-submit").innerHTML = `
          Send message
          <i class="uil uil-message button__icon"></i>`;
        console.error('Error sending email:', error);
      }
    } else {
      alert("Please fill out all the fields");
    }
  };

  return (
    <div>
      <Header />
      <div>
        <div className="lol-container">
          <div className='contact-naveen'>
            <h2>Contact Me</h2>
            <h3>Get in touch</h3>
          </div>
          <div className="naveen-contact">
            <div className="naveen-contact-1">
              <a href="https://www.linkedin.com/in/naveen-kumar-b6b1a6247/"><Icon icon="basil:linkedin-solid" width="30" height="30" /><h3>Linkedin</h3></a>
              <a href="https://github.com/Naveen-peace"><Icon icon="mingcute:github-line" width="30" height="30" /><h3>GitHub</h3></a>
              <a href="tel:+91 9841601822"><Icon icon="ph:phone-light" width="30" height="30" /><span><h3>Call Me</h3><h4>+91 9841601822</h4></span></a>
              <a href="mailto:naveenshark49@gmail.com"><Icon icon="humbleicons:mail" width="30" height="30" /><span><h3>E-mail</h3>
                <h4>naveenshark49@gmail.com</h4></span></a>
            </div>
            <div className="naveen-contact-2">
              <form onSubmit={handleSubmit} className='naveen-allform'>
                <div className="naveen-contact-sub">
                  <div className="naveen-form-main">
                    <div className="naveen-form">
                      <label htmlFor="name">Name:</label>
                      <input type="text" className='naveen-input' id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="naveen-form-1">
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" className='naveen-input' name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="naveen-form-2">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" className='naveen-input' value={formData.message} onChange={handleChange} required />
                  </div>
                </div>
                <h5>*You will get a confirmation mail after sending the message.</h5>
                <div className='naveen-download-form'>
                <button type="submit" id="email-submit">Submit Details<Icon icon="iconoir:send" width="20" height="20" /></button>
                <button className='naveen-resume-button-2' onClick={downloadResume}>
                  <Icon icon="uil:download-alt" width="20" height="20" /> Resume
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
