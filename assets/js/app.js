let scrolltop = document.getElementById("scrolltotop");
window.addEventListener("scroll", () => {
    if (pageYOffset > 300) {
        scrolltop.style.display = "block";
    } else {
        scrolltop.style.display = "none";
    }

});

scrolltop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
        const top = window.scrollY;
        if (top >= sec.offsetTop - 100) {
            current = sec.getAttribute("id");
        }
    });
    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});

// Mobile menu
document.getElementById("menu-btn").onclick = () => {
    document.getElementById("nav-menu").classList.toggle("show");
};