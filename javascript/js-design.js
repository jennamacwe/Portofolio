// BURGER MENU MOBILE
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});


const posterContainer = document.getElementById("posterContainer");
const nextBtn = document.getElementById("nextPoster");
const prevBtn = document.getElementById("prevPoster");

const scrollAmount = 400; 

// tombol kanan
nextBtn.addEventListener("click", () => {
    posterContainer.scrollLeft += scrollAmount;
    checkArrow();
});

// tombol kiri
prevBtn.addEventListener("click", () => {
    posterContainer.scrollLeft -= scrollAmount;
    checkArrow();
});

function checkArrow() {
    const maxScrollLeft =
        posterContainer.scrollWidth - posterContainer.clientWidth;

    // kalau masih di paling kiri → sembunyikan panah kiri
    if (posterContainer.scrollLeft <= 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }

    // kalau sudah mentok kanan → boleh tetap tampil 
    if (posterContainer.scrollLeft >= maxScrollLeft - 5) {
        nextBtn.style.opacity = "0.5"; 
    } else {
        nextBtn.style.opacity = "1";
    }
}
