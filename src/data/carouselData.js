// Required images for slides
const inventoryManagerImg = require("../images/inventory-mgmt.jpg");
const fireDepartmentImg = require("../images/fire-department.jpg");
const appointmentTrackerImg = require("../images/calendar.jpg");
const portfolioWebsiteImg = require("../images/headshot.png");
const underConstructionImg = require("../images/under-construction.jpg");

export const portfolioCarouselSlides = [
    {
        title: "Inventory Manager",
        imgSrc: inventoryManagerImg,
        description: "A JavaFX-based inventory management system designed to help businesses efficiently manage their inventory of parts and products. This application allows users to add, modify, and delete parts and products, search for specific items, and save their inventory data in JSON format.",
        isSourceCodeAvailable: true,
        sourceCodeLink: "https://github.com/T-Bower-GH/inventory-manager",
        isDownloadable: true,
        downloadLink: "https://www.dropbox.com/scl/fi/y0iz8ubnkiwron88woq8u/Inventory-Manager.jar?rlkey=3mc1uk9enybamz9we88pdh0qu&dl=1"
    },
    {
        title: "Fire Department Prediction Tool",
        imgSrc: fireDepartmentImg,
        description: "A Python-based CLI program used to help departments estimate call volume growth using machine learning and project needed resources. NOTE: This program is larger because it includes the necessary machine learning model libraries. Be sure to read the README.txt file before using!",
        isSourceCodeAvailable: true,
        sourceCodeLink: "https://github.com/T-Bower-GH/fd-prediction",
        isDownloadable: true,
        downloadLink: "https://www.dropbox.com/scl/fi/xd56exeoqo6xn5kvuq5ae/Fire-Department-Predictor.zip?rlkey=0i4ps6zkmz6p92cgg8cd14ogo&dl=1"
    },
    {
        title: "Team-Wide Appointment Tracker",
        imgSrc: appointmentTrackerImg,
        description: "This project is still being migrated to the site. Stay tuned!",
        isSourceCodeAvailable: false,
        sourceCodeLink: "",
        isDownloadable: false,
        downloadLink: ""
    },
    {
        title: "Portfolio Website",
        imgSrc: portfolioWebsiteImg,
        description: "Use the link below to check out the source code for this website!",
        isSourceCodeAvailable: true,
        sourceCodeLink: "https://github.com/T-Bower-GH/portfolio-website",
        isDownloadable: false,
        downloadLink: ""
    },
    {
        title: "Under Construction!",
        imgSrc: underConstructionImg,
        description: "My next great project is coming soon. Stay tuned!",
        isSourceCodeAvailable: false,
        sourceCodeLink: "",
        isDownloadable: false,
        downloadLink: ""
    }
];

