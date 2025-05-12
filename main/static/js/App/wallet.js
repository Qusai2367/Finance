import { loadWalletHeader } from "../components/walletHeader.js";
import { loadTransactionMenu } from "../utils/transactionsMenu.js"
import { statstics } from "../components/statistics.js";
import { updateActiveLink } from "../routes.js";


export async function loadWallet() {
    const main = document.getElementById('main-content');
    const headerContent = await loadWalletHeader();
    const statical = await statstics();
    const loadTransaction = await loadTransactionMenu();

    // Create view
    main.innerHTML = `
        <div class = "container">
            <header id="header">
                ${ headerContent }
            </header>

            <div class="record flex-around">

                <div class="record-dis flex-around gap-20 record-active" id="deposit" onclick="showStatical(this)">
                    <h5>Deposit</h5>
                    <i class="icon icon-archive-download"></i>
                </div>

                <div class="record-with flex-around gap-20 " id="withdrow" onclick="showStatical(this)">
                    <h5>Withdrow</h5>
                    <i class="icon icon-archive-download"></i>
                </div>


                
                
            </div>

            <div class="container-statistics mt-20">
               ${statical}
            </div>


            <!-- transaction -->

        <div class="transactions mtb-20 wallet-trans">

            <div class="transactions-header flex-between mb-20 ">
                <h1>Last Transaction</h1>
                <h4 class="main-color clickable">Show More</h4>
            </div>

            ${ loadTransaction }
        </div>


        </div>
    `

    updateActiveLink();
    
        
}

window.showStatical = async function(element) {
    const component = document.getElementById(element.id);
    const container = document.querySelector(".container-statistics")

    document.querySelectorAll(".record div").forEach(div => div.classList.remove("record-active"));
    component.classList.add("record-active");

    if(element.id === "deposit") {
        const statical = await statstics();
        container.innerHTML = statical;
    } else if (element.id === "withdrow") {
        container.innerHTML = `<h1 class = "mono">No Data</h1>`
    }
}
