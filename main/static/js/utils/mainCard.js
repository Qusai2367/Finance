export async function loadMainCard() {
    // Return the header HTML content instead of directly modifying the DOM

    return `
        <h1 class="finance">Finance</h1>
        <div class="current-balance mb-20">Current Balance</div>
        <h1 class="balance mb-10">2.543,3454 <span>SDG</span></h1>
        <p class="mb-20">15.355 SDG watting</p>

        <div class="amount flex-between">
            <div class="full-desposit amount-control mb-1">
                <p class="mb-10 clr">Full Desposit</p>
                <p>1.345,353 <span>SDG</span></p>
            </div>

            <div class="full-Withdraw amount-control">
                <p class="mb-10 clr">Full Withdraw</p>
                <p>345.353 <span>SDG</span></p>
            </div>
        </div>
    `
}