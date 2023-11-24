// PortfolioTab.js

import React from 'react';
import './PortfolioTab.css';

function PortfolioTab({ title, imgSrc, description, isLinkAvailable, pageLink, isDownloadable, downloadLink }) {
    return (
        <div className="portfolio-tab">
            <div className="tab-content">
                <h3>{title}</h3>
                <img src={imgSrc} alt={`${title} Tab`} />
            </div>
            <div className="project-info">
                <div><p>{description}</p></div>
                {isLinkAvailable && (
                    <a className="page-link" href={pageLink} target="_blank" rel="noreferrer">
                        Link: <span>{pageLink}</span>
                    </a>
                )}
                {isDownloadable && (
                    <a className="btn" href={downloadLink}>
                        Download
                    </a>
                )}
            </div>
        </div>
    );
}

export default PortfolioTab;
