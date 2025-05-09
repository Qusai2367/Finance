export function Theme() {
    const toggleTheme  = document.getElementById('toggleTheme');
    const body = document.body
    toggleTheme.addEventListener("click", () => {
        if (body.contains("dark")) {
            body.classList.remove("dark");
            body.classList.add("purple");
        } else if (body.contains("purple")) {
            body.classList.remove("purple");
            body.classList.add("dark");
        }
    })

}