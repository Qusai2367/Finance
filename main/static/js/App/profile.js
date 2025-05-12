import { loadProfileHeader, iniProfileHeaderEvent } from "../components/profileHeader.js";
import { updateActiveLink } from "../routes.js";


export async function loadProfile() {
    const main  = document.getElementById('main-content');
    const profileHeader = await loadProfileHeader();
    main.innerHTML = `
        <div class = "container">
            <header id="header">
                ${ profileHeader }
            </header>

            <div class="profiles">
                <div class="jumptroon-profile center">
                    <img rel="preload" src ="./static/assets/img/avatar-2.jpg" alt="profile-photo" as="image" class="rounded">
                    <h1 class="username">Qusai Mubarak</h1>
                    <div class="verfied">
                        <div>Verfied Account</div>
                        <i class="icon icon-shield-check"></i>
                        
                    </div>
                </div>
            </div>

            <div class="informations mt-30" id="infor">
                <ul>
                    <li class="mtb-10 flex-center gap-10 gap-10">
                        <i class="icon icon-office icon-font" ></i>
                        <div>Identify and Personal Data Verify</div>
                    </li>
    
                    <hr>

                    <li class="disable flex-center gap-10 mtb-10">
                        <i class="icon icon-tabs-plus icon-font" ></i>
                        <div>Payment Request</div>      
                    </li>
    
                    <hr>

                    <li class="mode flex-between gap-10 mtb-10">
                        <div class="flex-between gap-10">
                            <i class="icon icon-dark-light  icon-font" ></i>
                            <div class="text mark" id="text">Dark Mode</div>
                        </div>

                        <div class="toggle">
                            <i class="toggle__indicator"></i>
                        </div>
                    </li>
    
                    <hr>
                    <li id="Continue" class="flex-center gap-10 mtb-10">
                        <i class="icon icon-shield-check icon-font" ></i>
                        <div>Safty Settings</div>
                    </li>
    
                    <hr>

                    <li class="disable mtb-10 flex-center gap-10">
                        <i class="icon icon-file-text icon-font" ></i>
                        <div>Account Statement Request</di>
                    </li>
    
                    <hr>
                    <li class="mtb-10 flex-center gap-10">
                        <i class="icon icon-users-filled icon-font" ></i>
                        <div>Referrals</div>
                    </li>
    
                    <hr>
                    <li class="mtb-10 flex-center gap-10">
                        <i class="icon icon-msg-writing icon-font" ></i>
                        <div>Contact With Us</div>
                    </li>
    
                    <hr>
                    <li class="mtb-10 flex-center gap-10 red-color">
                        <i class="icon icon-arrow-door-in icon-font" ></i>
                        <div>Log Out</div>  
                    </li>

                </ul>
            </div>

            <footer class="gray-color-3">
                <p>made in sudan by  <i class="icon icon-heart" ></i> Qusai Mubarak</p>
                <h4>Finance <span> v-02.1</span> </h4> 
            </footer>

        </div>


       
        


    `

    iniProfileHeaderEvent();
    updateActiveLink();
    moveToggle()
}

function moveToggle() {
    const body = document.querySelector('body');
    const toggle = document.querySelector('.toggle');

    const saveTheme = localStorage.getItem("theme") || "light";

    toggle.classList.replace('light', saveTheme);
    body.classList.replace('light',saveTheme);

    toggle.onclick = () => {

        const currentTheme = body.classList.contains("dark") ? "dark" : "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        toggle.classList.replace(currentTheme, newTheme);
        body.classList.replace(currentTheme, newTheme);

        localStorage.setItem("theme", newTheme)
    }
}

