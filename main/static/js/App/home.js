import { loadHeader } from "../components/header.js";
import { loadMainCard } from "../utils/mainCard.js";
import { loadTransactionMenu } from "../utils/transactionsMenu.js"



export async function loadHome() {
    const main = document.getElementById('main-content');
    // Get the Dynamic content
    const headerContent = await loadHeader();
    const mainCard = await loadMainCard();
    const loadTransaction = await loadTransactionMenu();

    // Create view
    main.innerHTML = `
        <header id="header">
            ${ headerContent }
        </header>

        <div class="card main-card mtb-20" id="card">
            ${ mainCard }
        </div>

        <!-- Menu -->

        <div class="sub-menu flex-between clickable">
            <div class="content">
                    <p class="icons-menu">
                    <i class="icon icon-archive-download"></i>
                </p>
                <p class="dis-menu">Disposit</p>
            </div>

            <div class="content">
                <p class="icons-menu">
                    <i class="icon icon-archive-export"></i>
                </p>
                <p class="dis-menu">With Draw</p>
            </div>

            <div class="content icons-men">
                <p class="icons-menu">
                    <i class="icon icon-credit-card"></i>
                </p>
                <p class="dis-menu">Feed Card</p>
            </div>

            <div class="content">
                <p class="icons-menu">
                    <i class="icon icon-grid-interface"></i>
                </p>
                <p class="dis-menu">More</p>
                
            </div>
        </div>



        <!-- transaction -->

        <div class="transactions mtb-20">

            <div class="transactions-header flex-between mb-20 ">
                <h1>Last Transaction</h1>
                <h5 class="main-color clickable">Show More</h5>
            </div>

            ${ loadTransaction }

    `
        
}


