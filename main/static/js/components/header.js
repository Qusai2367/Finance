export async function loadHeader() {
    // Return the header HTML content instead of directly modifying the DOM
    return `
        <div class="flex-between">
            <div class="profile-info flex-between gap-10">
                <div class="image-prpfile">
                    <img rel="preload" src ="./static/assets/img/avatar.jpg" alt="profile-photo" as="image" class="rounded">
                </div>
                <div class="info flex-column">
                    <div class="hi">welcome</div>
                    <div class="your-name">Qusai Mu</div>
                </div>
            </div>
            <div class="notifications center">
                <i class="icon icon-alarm"></i>
                <span></span>
            </div>
        </div>
    `;
}