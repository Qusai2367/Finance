import { handleRouteChange } from "../routes.js"
export async function loadCardHeader() {
    // Return the header HTML content instead of directly modifying the DOM

    
    return `
        <div class="flex-between">
            <div class="notifications center">
                <i class="icon icon-alarm"></i>
                <span></span>
            </div>

            <h2> Card Management</h2>

            <div class="notifications center" id="navigate">
                <i class="icon icon-chevron-right"></i>
            </div>
            
        </div>
    `;


    
}

export function Nav() {
    document.getElementById("navigate").addEventListener("click", () => {
        // window.history.pushState({}, '', path);
        console.log(4)
    })
}

requestAnimationFrame(() => Nav())