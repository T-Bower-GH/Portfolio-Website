import './MyPortfolio.css';
import PortfolioTab from './PortfolioTab/PortfolioTab';

const hrAnalysisImg = require("../../images/hr-analysis.jpg")
const wellnessTechnologyImg = require("../../images/wellness-technology-pic.png")
const fireDepartmentImg = require("../../images/fire-department.jpg");
const appointmentTrackerImg = require("../../images/calendar.jpg");
const webScraperImg = require("../../images/web-scraper.png");
const lightningStrikeDashboardImg = require("../../images/lightning-strike-dashboard.png");
const worldPopulationDashboardImg = require("../../images/world-population-dashboard.png");

function MyPortfolio() {
    // Define the data for each portfolio tab
    const tabsData = [
        {
            title: 'HR Data Analysis with Machine Learning',
            imgSrc: hrAnalysisImg,
            description: 'My Google Advanced Data Analytics Certificate capstone project: I used company survey data to reduce churn by predicting if an employee was likely to leave the company using machine learning models such as Logistic Regression, Decision Tree, and Random Forest in a Python notebook.',
            isLinkAvailable: true,
            pageLink: 'https://www.kaggle.com/code/trevbower/hr-data-analysis-with-machine-learning',
            isDownloadable: true,
            downloadLink: 'https://www.dropbox.com/scl/fi/gd0c6vbar5t2bvad3obll/HR-Data-Analysis-with-Machine-Learning.zip?rlkey=1a9v9ygq2ucdrf5lku3d0iyc0&dl=1',
        },{
            title: 'Business Marketing EDA',
            imgSrc: wellnessTechnologyImg,
            description: 'My Google Data Analytics Certificate capstone project: I performed an analysis to help a business identify & improve marketing strategies by pulling public datasets, cleaning and formatting the data, analyzing it to identify trends and potential opportunties to take advantage of, prepared data visualizations, and communicated an action plan based on the results. This project was documented in a Jupyter Notebook through Kaggle using the R programming language.',
            isLinkAvailable: true,
            pageLink: 'https://www.kaggle.com/code/trevbower/wellness-technology-marketing-opportunity-analysis',
            isDownloadable: true,
            downloadLink: 'https://www.dropbox.com/scl/fi/2yvr02xyasjsfhl411rtf/Wellness-Technology-Marketing-Opportunity-Analysis-Notebook.ipynb?rlkey=zs9o018jtmbwe3htgmp76fhbe&dl=1',
        },
        {
            title: 'Fire Department Predictive Analysis Tool',
            imgSrc: fireDepartmentImg,
            description: 'A Python-based CLI program used to help fire departments create data visualizations and estimate call volume growth using machine learning and project needed resources. NOTE: This program is larger because it includes the necessary machine learning model libraries. Be sure to read the README.txt file before using!',
            isLinkAvailable: true,
            pageLink: 'https://github.com/T-Bower-GH/fd-prediction',
            isDownloadable: true,
            downloadLink: 'https://www.dropbox.com/scl/fi/xd56exeoqo6xn5kvuq5ae/Fire-Department-Predictor.zip?rlkey=0i4ps6zkmz6p92cgg8cd14ogo&dl=1',
        },
        {
            title: 'Relational Database Appointment Tracker',
            imgSrc: appointmentTrackerImg,
            description: 'This is a standalone application made using JavaFX that allows businesses to save, edit, delete, and view reports about customer information, appointments, locations, and customer service representatives in a relational database using MySQL. It also includes time-zone & language localization, login functionality, & login history tracking. Note that this program only works when connected to a specific server with proper credentials.',
            isLinkAvailable: true,
            pageLink: 'https://github.com/T-Bower-GH/appointment-scheduler',
            isDownloadable: false,
            downloadLink: '',
        },
        {
            title: 'Web Scraper & EDA with Excel',
            imgSrc: webScraperImg,
            description: 'A web scaper created using Python and BeautifulSoup to gather data from a web page, translate it into a DataFrame in pandas, and export it as an Excel spreadsheet. Includes example use to analyze trends in the largest companies in the U.S., including data cleaning, restructuring, and creating data visualizations within Excel.',
            isLinkAvailable: true,
            pageLink: 'https://www.kaggle.com/code/trevbower/python-web-scraper-using-beautifulsoup-pandas/edit/run/151882955',
            isDownloadable: true,
            downloadLink: 'https://www.dropbox.com/scl/fi/0vstvsrxxtxl4o7a2h0ml/Python-Web-Scraper-using-BeautifulSoup-Pandas.zip?rlkey=mnn17ymca03iq78glq4a2wwic&dl=1',
        },
        {
            title: 'Interactive Tableau Dashboard: Lightning Strikes Across U.S.',
            imgSrc: lightningStrikeDashboardImg,
            description: 'An interactive dashboard including a story presentation made with Tableau explaining the trends in lightning strike locations across the U.S. & Texas.',
            isLinkAvailable: true,
            pageLink: 'https://public.tableau.com/app/profile/trevor.bower7961/viz/LightningStrikePatternsinU_S_Texas/InteractiveDashboard',
            isDownloadable: false,
            downloadLink: '',
        },
        {
            title: 'Power BI Dashboard: World Population',
            imgSrc: worldPopulationDashboardImg,
            description: 'A dashboard made with Microsoft Power BI to show world population data over time.',
            isLinkAvailable: false,
            pageLink: '',
            isDownloadable: true,
            downloadLink: 'https://www.dropbox.com/scl/fi/r3170oefs1o113nmvh71b/World-Population-Dashboard.pbix?rlkey=xefnuc9c02l7punrgmn5mji2i&dl=1',
        }


    ];

    return (
    <div id="portfolio">
        <div className="container">
            <h1>My Portfolio</h1>
            <p className="description">Check out some of my latest projects! If you have any questions or would like more details, feel free to contact me below!</p>
            
            {/* Map through tabsData and create PortfolioTab for each item */}
            {tabsData.map((tab, index) => (
                <PortfolioTab
                    key={index}
                    title={tab.title}
                    imgSrc={tab.imgSrc}
                    description={tab.description}
                    isLinkAvailable={tab.isLinkAvailable}
                    pageLink={tab.pageLink}
                    isDownloadable={tab.isDownloadable}
                    downloadLink={tab.downloadLink}
                />
            ))}
        </div>
    </div>
    );
}

export default MyPortfolio;