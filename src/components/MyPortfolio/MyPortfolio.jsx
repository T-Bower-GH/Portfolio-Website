import './MyPortfolio.css';
import Carousel from '../Carousel/Carousel';
import { portfolioCarouselSlides } from '../../data/carouselData';


function MyPortfolio() {

    return (
    <div id="portfolio">
        <div className="container">
            <h1>My Portfolio</h1>
            <p className="description">Click or tap the arrows to navigate. Hover over each project for more details, then use the link to see my source code, or (if you are on the right system for the program) use the download icon to download a ready-to-go version of the program to see it in action!</p>
            {/* Add portfolio content here (Delete unused carousel parts when done) */}
        </div>
    </div>
    );
}

export default MyPortfolio;