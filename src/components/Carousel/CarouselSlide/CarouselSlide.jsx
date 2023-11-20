import './CarouselSlide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function CarouselSlide({title, imgSrc, description, isSourceCodeAvailable, sourceCodeLink, isDownloadable, downloadLink}) {
    return(
        <div className="carousel-slide">
            <h3>{title}</h3>
            <img src={imgSrc} alt={title + " Slide"}/>
            <div className="layer">
                <p>{description}</p>
                {/* Short circuit operator for source code link */}
                {isSourceCodeAvailable && (
                    <a className="source-code" href={sourceCodeLink} target="_blank" rel="noreferrer">Source Code</a>
                )}
                {/* Short circuit operator for download button */}
                {isDownloadable && (
                    <a className="project-download" href={downloadLink}>
                        <i className="fa-solid fa-download">
                            <FontAwesomeIcon icon={faDownload}/>
                        </i>
                    </a>
                )}
            </div>
        </div>
    );
}

export default CarouselSlide;