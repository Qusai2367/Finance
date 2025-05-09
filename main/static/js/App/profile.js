export async function loadProfile() {
    const main  = document.getElementById('main-content');

    main.innerHTML = `
        <h1> Profile </h1>

    `

}

import { Nav } from "../components/cardHeader.js"
requestAnimationFrame(() => Nav())