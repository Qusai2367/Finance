import { loadHome } from "./App/home.js";
import { loadCard } from "./App/cards.js";
import { loadTransactions } from "./App/transactions.js";
import { loadWallet } from "./App/wallet.js";
import { loadProfile } from "./App/profile.js"

const routes = {
    '/': loadHome,
    '/cards': loadCard,
    '/profile': loadProfile,
    '/transactions': loadTransactions,
    '/wallet': loadWallet
};


const main = document.getElementById("main-content");


export function initRouter() {
    // Handle initial load
    handleRouteChange();

    

    // Handle back/forward navigation
    window.addEventListener('popstate', handleRouteChange );

   
    // Delegate link clicks with improved event delegation
    document.addEventListener('click', e => {
        // Find the closest .page element (handles clicks on child elements like icons)
        const pageLink = e.target.closest('.page');
        if (pageLink) {
            e.preventDefault();
            const href = pageLink.getAttribute('href');
            navigateTo(href);
            updateActiveLink();
        }
    });
}

export function handleRouteChange() {

    main.classList.add("zoomin");

    const path = window.location.pathname;
    
    const NotFound = `
    <div class="error">
        <div class="notFund">404 - Page Not Found </div>
    
        <a href="/" class="page">
            <i class="icon-home"></i>
            Home
        </a>
        
    </div>
    `;
    loader();
    setTimeout(() =>{
        // Check if the route exists
        if (routes[path]) {
        // Update document title based on current route
            updateDocumentTitle(path);
        
        // Load the view without refreshing the page
            routes[path]().catch(err => {
                console.error('Error loading view:', err);
                document.getElementById('main-content').innerHTML = NotFound;
            });
        } else {
        // Handle 404 case
            document.getElementById('main-content').innerHTML = NotFound;
            updateDocumentTitle(path);
        }
    } ,200)

}

// Function to update document title based on current route
function updateDocumentTitle(path) {
    const titles = {
        '/': 'Home',
        '/cards': 'Cards',
        '/transactions': 'Transactions',
        '/wallet': 'Wallet',
        '/profile': 'Profile'
    };
    
    const pageTitle = titles[path] || 'Page Not Found';
    document.title = `${pageTitle}`;
}

export function navigateTo(path) {
    window.history.pushState({}, '', path);
    handleRouteChange();
    
}

function loader() {
    document.getElementById("main-content").innerHTML = `
    <div class="centerLoad">
      <div class="circle-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    `
}

export function updateActiveLink() {
    
    const pages = document.querySelectorAll(".nav-list li");
    const currentPath = window.location.pathname;
    const main = document.getElementById("main-content");
    pages.forEach(li => {
        const anchor = li.querySelector("a");
        const href = anchor?.getAttribute("href");

        if (href === currentPath) {
            li.classList.add("active");
           
        } else {
            li.classList.remove("active");
            main.classList.remove("zoomin");
        }
        
        
    });

    
}


export function animation() {
    main.classList.add("zoomin");
}