document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".products_container").classList.toggle("show");
    if (document.querySelector(".menu-icon").getAttribute("src") === "Assets/Menu.svg") {
        document.querySelector(".menu-icon").setAttribute("src", "Assets/Close.svg");
    } else {
        document.querySelector(".menu-icon").setAttribute("src", "Assets/Menu.svg");
    }
});