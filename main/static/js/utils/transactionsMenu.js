
export async function loadTransactionMenu() {
    // Return the header HTML content instead of directly modifying the DOM
    return `
        

        <div class="transaction-content bg-color-red flex-between mb-20 clickable">
            <div class="transactions-icon">
                <i class="fa-solid fa-hand-holding-dollar"></i>
            </div>

            <div class="transactions-details">
                <div class="transaction-type">Withdraw By USTD</div>
                <div class="info-clainet">4235643435</div>
            </div>

            <div class="transaction-amount amount-clr-red">+$24.5455</div>
        </div>

        <div class="transaction-content bg-color-whiteblue flex-between mb-20 clickable">
            <div class="transactions-icon">
                <img  src="./static/assets/img/avatar-1.jpg" alt="profile-photo" class="rounded">
            </div>

            <div class="transactions-details">
                <div class="transaction-type">Send to Ahamed</div>
                <div class="info-clainet">@Ahamed</div>
            </div>

            <div class="transaction-amount amount-clr-blue">+$24.5455</div>
        </div>

        <div class="transaction-content bg-color-gray flex-between mb-20 clickable">
            <div class="transactions-icon">
                <i class="fa-brands fa-paypal"></i>
            </div>

            <div class="transactions-details">
                <div class="transaction-type">Disposit by Paypal</div>
                <div class="info-clainet">Qusai23@gmail.com</div>
            </div>

            <div class="transaction-amount amount-clr-whiteblack">+$24.5455</div>
        </div>


        <div class="transaction-content bg-color-red flex-between mb-20 clickable">
            <div class="transactions-icon">
                <i class="fa-brands fa-paypal"></i>
            </div>

            <div class="transactions-details">
                <div class="transaction-type">Disposit by Paypal</div>
                <div class="info-clainet">Qusai23@gmail.com</div>
            </div>

            <div class="transaction-amount amount-clr-red">+$24.5455</div>
        </div>

        <div class="transaction-content bg-color-red flex-between mb-20 clickable">
            <div class="transactions-icon">
                <i class="fa-brands fa-paypal"></i>
            </div>

            <div class="transactions-details">
                <div class="transaction-type">Disposit by Paypal</div>
                <div class="info-clainet">Qusai23@gmail.com</div>
            </div>

            <div class="transaction-amount amount-clr-red">+$24.5455</div>
        </div>

        <div class="transaction-content bg-color-red flex-between mb-20 clickable">
            <div class="transactions-icon">
                <i class="fa-brands fa-paypal"></i>
            </div>

            <div class="transactions-details">
                <div class="transaction-type">Disposit by Paypal</div>
                <div class="info-clainet">Qusai23@gmail.com</div>
            </div>

            <div class="transaction-amount amount-clr-red">+$24.5455</div>
        </div>


        <div class="transaction-content bg-color-red flex-between mb-20 clickable">
            <div class="transactions-icon">
                <i class="fa-brands fa-paypal"></i>
            </div>

            <div class="transactions-details">
                <div class="transaction-type">Disposit by Paypal</div>
                <div class="info-clainet">Qusai23@gmail.com</div>
            </div>

            <div class="transaction-amount amount-clr-red">+$24.5455</div>
        </div>
    `
}