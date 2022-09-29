const openProductsList = document.querySelectorAll(".toggle_products");
openProductsList.forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".products_container").classList.toggle("show");
        
        if (document.querySelector(".deskbtn").ariaExpanded == "false") {
            document.querySelector(".deskbtn").ariaExpanded = "true";
            document.querySelector(".deskbtn").ariaLabel = "Close products list";
        } else {
            document.querySelector(".deskbtn").ariaExpanded = "false";
            document.querySelector(".deskbtn").ariaLabel = "Open products list";
        }

        const mobileQuery = window.matchMedia("(max-width: 1023px)");
        if (mobileQuery.matches) {
            if (document.querySelector(".menu-icon").getAttribute("src") === "Assets/Menu.svg") {
                document.querySelector(".menu-icon").setAttribute("src", "Assets/Close.svg");
                document.querySelector("#hamburger").ariaLabel = "Close menu";
                document.querySelector("#hamburger").ariaExpanded = "true";
            } else {
                document.querySelector(".menu-icon").setAttribute("src", "Assets/Menu.svg");
                document.querySelector("#hamburger").ariaLabel = "Open menu";
                document.querySelector("#hamburger").ariaExpanded = "false";
            }
        }

        const desktopQuery = window.matchMedia("(min-width: 1024px)");
        if (desktopQuery.matches) {
           window.addEventListener("click", (e) => {
                if (!e.target.matches('.toggle_products')) {
                    document.querySelector(".products_container").classList.remove("show");
                }
            }); 
        }
    });
});