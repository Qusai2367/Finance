import { iniCardHeaderEvent, loadSendHeader } from "../components/sendHeader.js";
import { updateActiveLink } from "../routes.js";

export async function loadTransactions() {
    const main = document.getElementById('main-content');
    const headerContent = await loadSendHeader();

    // Create view
    main.innerHTML = `
        <div class = "container">
            <header id="header">
                ${ headerContent }
            </header>
        

            <h3 class="mb-20">Recently</h3>

            <div class="flex-trsns">
                <div class="recent-send mb-20">
                    <img rel="preload" src ="./static/assets/img/avatar-1.jpg" alt="profile-photo" as="image" class="rounded">
                    <div class="info-trans">
                        <div class="name">
                            Qusai Mubarak 
                        </div>
                        <div class="username gray-color-3">
                            @Qusai2367
                        </div>
                    </div>
                </div>

                <div class="recent-send mb-20">
                    <img rel="preload" src ="./static/assets/img/avatar-2.jpg" alt="profile-photo" as="image" class="rounded">
                    <div class="info-trans">
                        <div class="name">
                            Qusai Mubarak
                        </div>
                        <div class="username gray-color-3">
                            @Qusai2367
                        </div>
                    </div>
                </div>


                <div class="recent-send mb-20">
                    <img rel="preload" src ="./static/assets/img/avatar-3.jpg" alt="profile-photo" as="image" class="rounded">
                    <div class="info-trans">
                        <div class="name">
                            Qusai Mubarak
                        </div>
                        <div class="username gray-color-3">
                            @Qusai2367
                        </div>
                    </div>
                </div>

                <div class="recent-send mb-20">
                    <img rel="preload" src ="./static/assets/img/avatar-4.jpg" alt="profile-photo" as="image" class="rounded">
                    <div class="info-trans">
                        <div class="name">
                            Qusai Mubarak 
                        </div>
                        <div class="username gray-color-3">
                            @Qusai2367
                        </div>
                    </div>
                </div>
            </div>

            <h1 class="mb-20 mt-20">Contacts</h1>
            

            <div class="input-container">
                <div class="input-content-no-after input-trans">
                    <i class="icon icon-zoom"></i>
                    <input class="input-field ml-10" id="search" type="text" placeholder="Search for Name or Username" name="usrnm">
                </div>
            </div>

            <div class="contact-container">
                <div class="mb-20 flex-between gap-20 contact">
                    <img rel="preload" src ="./static/assets/img/avatar-5.jpg" alt="profile-photo" as="image" class="rounded">
                    <div class="contact-info">
                        <div class="name ">
                            Qusai Mubarak
                        </div>
                        <div class="username gray-color-3">
                            @Qusai2367
                       </div>
                    </div>
                </div>

                <div class="mb-20 flex-between gap-20 contact">
                    <img rel="preload" src ="./static/assets/img/team1.jpg" alt="profile-photo" as="image" class="rounded">
                    <div class="contact-info">
                        <div class="name ">
                            Qusai Mubarak
                        </div>
                        <div class="username gray-color-3">
                            @Qusai2367
                       </div>
                    </div>
                </div>


                <div class="mb-20 flex-between gap-20 contact">
                    <img rel="preload" src ="./static/assets/img/team2.jpg" alt="profile-photo" as="image" class="rounded">
                    <div class="contact-info">
                        <div class="name ">
                            Qusai Mubarak
                        </div>
                        <div class="username gray-color-3">
                            @Qusai2367
                       </div>
                    </div>
                </div>


                <div class="mb-20 flex-between gap-20 contact">
                    <img rel="preload" src ="./static/assets/img/avatar-1.jpg" alt="profile-photo" as="image" class="rounded">
                    <div class="contact-info">
                        <div class="name ">
                            Qusai Mubarak
                        </div>
                        <div class="username gray-color-3">
                            @Qusai2367
                       </div>
                    </div>
                </div>


                <div class="mb-20 flex-between gap-20 contact">
                    <img rel="preload" src ="./static/assets/img/avatar-2.jpg" alt="profile-photo" as="image" class="rounded">
                    <div class="contact-info">
                        <div class="name ">
                            Qusai Mubarak
                        </div>
                        <div class="username gray-color-3">
                            @Qusai2367
                       </div>
                    </div>
                </div>

                <div class="mb-20 flex-between gap-20 contact">
                    <img rel="preload" src ="./static/assets/img/avatar-3.jpg" alt="profile-photo" as="image" class="rounded">
                    <div class="contact-info">
                        <div class="name ">
                            Qusai Mubarak
                        </div>
                        <div class="username gray-color-3">
                            @Qusai2367
                       </div>
                    </div>
                </div>

                <div class="mb-20 flex-between gap-20 contact">
                    <img rel="preload" src ="./static/assets/img/avatar-4.jpg" alt="profile-photo" as="image" class="rounded">
                    <div class="contact-info">
                        <div class="name ">
                            Qusai Mubarak
                        </div>
                        <div class="username gray-color-3">
                            @Qusai2367
                       </div>
                    </div>
                </div>

                <div class="mb-20 flex-between gap-20 contact">
                    <img rel="preload" src ="./static/assets/img/avatar-5.jpg" alt="profile-photo" as="image" class="rounded">
                    <div class="contact-info">
                        <div class="name ">
                            Qusai Mubarak
                        </div>
                        <div class="username gray-color-3">
                            @Qusai2367
                       </div>
                    </div>
                </div>

                <div class="mb-20 flex-between gap-20 contact">
                    <img rel="preload" src ="./static/assets/img/avatar.jpg" alt="profile-photo" as="image" class="rounded">
                    <div class="contact-info">
                        <div class="name ">
                            Qusai Mubarak
                        </div>
                        <div class="username gray-color-3">
                            @Qusai2367
                       </div>
                    </div>
                </div>

                <div class="mb-20 flex-between gap-20 contact">
                    <img rel="preload" src ="./static/assets/img/avatar-1.jpg" alt="profile-photo" as="image" class="rounded">
                    <div class="contact-info">
                        <div class="name ">
                            Qusai Mubarak
                        </div>
                        <div class="username gray-color-3">
                            @Qusai2367
                       </div>
                    </div>
                </div>

                <div class="mb-20 flex-between gap-20 contact">
                    <img rel="preload" src ="./static/assets/img/avatar-2.jpg" alt="profile-photo" as="image" class="rounded">
                    <div class="contact-info">
                        <div class="name ">
                            Qusai Mubarak
                        </div>
                        <div class="username gray-color-3">
                            @Qusai2367
                       </div>
                    </div>
                </div>

            </div>

        </div>
    `

    iniCardHeaderEvent();
    updateActiveLink();
        
}

