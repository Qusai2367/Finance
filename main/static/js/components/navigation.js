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

// Function to update the active navigation link based on current path
// function updateActiveNavLink() {
    
//     const navLinks = document.querySelectorAll('.nav-list li');
    
//     // Remove active class from all links
//     navLinks.forEach(li => {
//         li.addEventListener("click", () => {
//             li.classList.remove('active');
//         });
       
//         const link = li.querySelector('a');
//         const currentPath = window.location.pathname;
//         console.log(currentPath)
//         if (link && link.getAttribute('href') === currentPath) {
//             li.classList.add('active');
//         }
//         // Find the link inside this list item
        
//     });
// }
