import React, {useState} from 'react';
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
                            <p>Hi, I'm Trevor Bower! I'm a Data Analyst, as well as a former first-responder and small business owner. When I'm not spending time with family, I'm sitting at my computer! Thank you for your interest. I can't wait to hear about your potential projects!</p>  
                            <div className="tab-titles">
                                <p className={`tab-links ${activeTab === 'skills' ? 'active-link': ''}`} onClick={() => setActiveTab('skills')}>Skills</p>
                                <p className={`tab-links ${activeTab === 'education' ? 'active-link': ''}`} onClick={() => setActiveTab('education')}>Education & Certifications</p>
                            </div>
                            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' :''}`} id="skills">
                                <ul>
                                    <li><span>Programming Languages</span><br/>Python, R, Java, HTML, CSS, JavaScript</li>
                                    <li><span>Analysis Tools</span><br/>SQL/MySQL/SQLite, Microsoft Excel, Tableau, Power BI, Google Sheets</li>
                                    <li><span>Other Tools</span><br/>Jupyter Notebooks, Microsoft Office, Git/Github, Canva</li>
                                </ul>
                            </div>
                            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' :''}`} id="education">
                                <ul>
                                    <li><span>Bachelor of Science: Computer Science</span><br/>Western Governors University</li>
                                    <li><span>Google Data Analytics Certificate</span><br/>Coursera</li>
                                    <li><span>Google Advanced Data Analytics Certificate</span><br/>Coursera</li>
                                    <li><span>Microsoft Office Specialist: Excel 2019 Associate</span><br/>Microsoft</li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
    );
}

export default AboutMe;