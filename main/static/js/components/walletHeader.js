export async function loadWalletHeader() {
    // Return the header HTML content instead of directly modifying the DOM

    
    return `
        <div class="flex-between">
            <div class="notifications center">
                <i class="icon icon-alarm"></i>
                <span></span>
            </div>

            <div class="flex-between gap-20">
                <div class="gray-color-3"> 2,39934 SDG</div>
                <div class="notifications center" id="navigate">
                    <i class="icon icon-money-bill-coin"></i>
                </div> 
            </div>
            
        </div>
    `;


    
}
