const text = "Vaseem";
let i = 0;

window.addEventListener("load", function () {
    function typeWriter() {
        const typing = document.getElementById("typing");

        if (!typing) return;

        if (i < text.length) {
            typing.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 200);
        }
    }

    typeWriter();
});

// MENU
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

console.log(menuBtn, navLinks);
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});