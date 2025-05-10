export function loadNavigation() {
    const nav = document.getElementById('navigation');
    nav.innerHTML = `
        <ul class="nav-list flex-between">
                <li class="active">
                    <a href="/" class="page">
                        <i class="icon icon-house-6"></i>
                    </a>
                </li>

                <li>
                    <a href="/cards" class="page">
                        <i class="icon icon-credit-card"></i>
                    </a>
                </li>

                <li class="send center">
                    <a href="/transactions" class="page">
                        <i class="icon icon-arrow-up-2"></i>
                    </a>
                </li>

                <li>
                    <a href="/wallet" class="page">
                        <i class="icon icon-wallet-2"></i>
                    </a>
                </li>
  
                <li>
                    <a href="/profile" class="page">
                        <i class="icon icon-profile"></i>
                    </a>
                </li>
           </ul>
    `;
    
    // Update active navigation link based on current path

}


