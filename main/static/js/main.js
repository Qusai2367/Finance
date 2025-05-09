import { initRouter } from "./routes.js";
import { loadNavigation } from "./components/navigation.js";

// Initialize the app
function initApp() {
    initRouter();
    loadNavigation();

}

document.addEventListener('DOMContentLoaded', initApp);
