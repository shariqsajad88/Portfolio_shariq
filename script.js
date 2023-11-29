// Sample portfolio data
const portfolioItems = [
    {
        title: "Project-1(Major): Autonoumus Driving Car Using CNN",
        description: "",
        
    },
    {
        title: "Project 2",
        description: "Description of Project 2",
        image: "project2.jpg"
    },
    // Add more portfolio items as needed
];

// Function to create and append portfolio items to the portfolio container
function createPortfolioItem(item) {
    const portfolioContainer = document.getElementById("portfolio-container");

    const portfolioItem = document.createElement("div");
    portfolioItem.className = "portfolio-item";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.title;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    portfolioItem.appendChild(image);
    portfolioItem.appendChild(title);
    portfolioItem.appendChild(description);

    portfolioContainer.appendChild(portfolioItem);
}

// Load portfolio items dynamically
window.onload = function() {
    portfolioItems.forEach(item => createPortfolioItem(item));
};
