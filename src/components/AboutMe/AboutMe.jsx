import React, {useState, useEffect} from 'react';
import './AboutMe.css';

function AboutMe() {
    const [activeTab, setActiveTab] = useState('skills');

    return (
        <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="about-col-1">
                            <img src={require("../../images/headshot.png")} alt="Trevor Bower Profile"/>
                        </div>
                        <div className="about-col-2">         
                            <h1>About Me</h1>  
                            <p>Hi, I'm Trevor Bower! I am a software engineer, as well as a former first-responder and small business owner. When I'm not spending time with family, I'm sitting at my computer! Thank you for your interest. I can't wait to hear about your new project ideas!</p>  
                            <div className="tab-titles">
                                <p className={`tab-links ${activeTab === 'skills' ? 'active-link': ''}`} onClick={() => setActiveTab('skills')}>Skills</p>
                                <p className={`tab-links ${activeTab === 'education' ? 'active-link': ''}`} onClick={() => setActiveTab('education')}>Education</p>
                            </div>
                            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' :''}`} id="skills">
                                <ul>
                                    <li><span>Frontend Development (Web Design)</span><br/>HTML, CSS, JavaScript</li>
                                    <li><span>Backend & Application Development</span><br/>Java, Python, SQL</li>
                                    <li><span>Other Skills</span><br/>Microsoft Office, Git/Github, WordPress, MailChimp, Canva</li>
                                </ul>
                            </div>
                            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' :''}`} id="education">
                                <ul>
                                    <li><span>Bachelor of Science in Computer Science</span><br/>Western Governors University</li>
                                    <li><span>ITIL® 4 Foundation - IT Service Management Certification</span><br/>AXELOS</li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
    );
}

export default AboutMe;