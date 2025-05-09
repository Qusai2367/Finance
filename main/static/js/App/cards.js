import { loadCardHeader } from "../components/cardHeader.js";

import { Nav } from "./components/cardHeader.js"

export async function loadCard() {
    const main = document.getElementById('main-content');
    const headerContent = await loadCardHeader();
    // Create view
    main.innerHTML = `

    <header id="header">
            ${ headerContent }
    </header>]

    <div class="card main-card mtb-20">

        <h1 class="finance">Finance</h1>
        <div class="edit-card flex-between">
            <img src="./static/assets/img/logo_w300.png" alt="">
            <span class="edit">
                <i class="icon icon-uea16-"></i>
            </span>
        </div>

        <div class="mtb-10">
            <i class="fa-brands fa-cc-visa"></i>
        </div>

        <h1 class="balance mb-10">2.543,3454 <span>SDG</span></h1>

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
    </div>

    <div class="card main-card mtb-20 colored">
        <h1 class="finance">Finance</h1>
        <div class="edit-card flex-between">
            <img src="./static/assets/img/logo_w300.png" alt="">
            <span class="edit">
                <i class="icon icon-uea16-"></i>
            </span>
        </div>

         <div class="mtb-10">
            <i class="fa-brands fa-cc-visa"></i>
        </div>

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
    </div>

    <div class="btn-container bg-main btn-card" id="createCard">
        <button> Create Card </div>
    </div>
    `
      
    
}




