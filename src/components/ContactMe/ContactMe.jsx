import React, { useState } from 'react';
import './ContactMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ContactMe() {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Message: '',
    });

    const [statusMessage, setStatusMessage] = useState('');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyHxbbVQhy9iILf3S5OMIHCft3uwoH4klcW660h4QJNdSFFEttuzB8beaPq1Jv40NIASA/exec';

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setStatusMessage('Sending message...');

        fetch(scriptURL, { method: 'POST', body: new FormData(e.target) })
            .then((response) => {
                setStatusMessage('Message sent!');
                setTimeout(() => {
                    setStatusMessage('');
                }, 5000);
                setFormData({
                    Name: '',
                    Email: '',
                    Message: '',
                });
            })
            .catch((error) => console.error('Error!', error.message));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1>Contact Me</h1>
                        <p>
                            <i className="fa-solid fa-envelope">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </i>
                            bowertrevor@live.com
                        </p>
                        <p>
                            <i className="fa-solid fa-phone">
                                <FontAwesomeIcon icon={faPhone} />
                            </i>
                            804-525-8099
                        </p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/trevor-bower-5a11b0132/">
                                <FontAwesomeIcon icon={faLinkedin} />
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/T-Bower-GH">
                                <img src={require('../../images/github-mark-white.png')} alt="GitHub Icon" />
                            </a>
                        </div>
                        <a href="downloadables/Resume - Trevor Bower.pdf" download className="btn">
                            Download My Resume
                        </a>
                    </div>
                    <div className="contact-right">
                        <form onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                name="Name"
                                placeholder="Name"
                                value={formData.Name}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="Email"
                                placeholder="Email"
                                value={formData.Email}
                                onChange={handleInputChange}
                                required
                            />
                            <textarea
                                name="Message"
                                rows="6"
                                placeholder="Message"
                                value={formData.Message}
                                onChange={handleInputChange}
                            ></textarea>
                            <button type="submit" className="btn">
                                Submit
                            </button>
                        </form>
                        <span id="status-message">{statusMessage}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
