export async function loadProfileHeader() {
    // Return the header HTML content instead of directly modifying the DOM

    
    return `
        <div class="flex-between">
            <div class="notifications center">
                <i class="icon icon-uea16-"></i>
            </div>

            <div class="notifications center" id="navigate">
                <i class="icon icon-chevron-right"></i>
            </div>
            
        </div>


        
    `;


    
}


export function iniProfileHeaderEvent() {
    const navBtn = document.getElementById("navigate");

    if (navBtn) {
        navBtn.addEventListener("click", () => {
            history.back();
        });
    } else {
        console.warn("Navigate Element Not found")
    }

   
}