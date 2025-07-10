document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIcon = document.getElementById("menuIcon");

    menuToggle.addEventListener("click", function () {
        // Check if menu is currently hidden
        const isHidden = mobileMenu.hasAttribute("hidden");

        if (isHidden) {
            // Show the menu
            mobileMenu.removeAttribute("hidden");
            // Animate open
            mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
            mobileMenu.style.opacity = 1;

            // Change icon to "close" (you can use fontawesome's 'fa-times')
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-times");
        } else {
            // Animate close
            mobileMenu.style.maxHeight = "0";
            mobileMenu.style.opacity = 0;

            // After transition, hide the menu to remove from tab order
            mobileMenu.addEventListener(
                "transitionend",
                function handler() {
                    mobileMenu.setAttribute("hidden", "");
                    mobileMenu.removeEventListener("transitionend", handler);
                }
            );

            // Change icon back to "bars"
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        }
    });
});