const toggleButton = document.querySelector(".theme-toggle-btn");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
