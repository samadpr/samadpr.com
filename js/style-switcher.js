// ============================ toggler style switcher ===============================
document.addEventListener("DOMContentLoaded", () => {
    const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
    styleSwitcherToggle.addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
    });

    window.addEventListener("scroll", () => {
        if (document.querySelector(".style-switcher").classList.contains("open")) {
            document.querySelector(".style-switcher").classList.remove("open");
        }
    });
});

// ============================ theme colors ===============================
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true")
        }
    })
}
// ============================ theme light and dart mode ===============================
