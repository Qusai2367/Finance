export async function loadCardHeader() {
    // Return the header HTML content instead of directly modifying the DOM

    
    return `
        <div class="flex-between">
            <div class=" center">
            </div>

            <h2 style = "text-align: center"> Send</h2>

            <div class="notifications center" id="navigate">
                <i class="icon icon-chevron-right"></i>
            </div>
            
        </div>
    `;


    
}

export function iniCardHeaderEvent() {
    const navBtn = document.getElementById("navigate");

    if (navBtn) {
        navBtn.addEventListener("click", () => {
            history.back();
        });
    } else {
        console.warn("Navigate Element Not found")
    }

   
}