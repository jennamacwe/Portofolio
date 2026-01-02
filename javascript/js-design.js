// BURGER MENU MOBILE
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});


const posterContainer = document.getElementById("posterContainer");
const nextBtn = document.getElementById("nextPoster");
const prevBtn = document.getElementById("prevPoster");

const scrollAmount = 200; 

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

// tombol view cv
document.querySelectorAll('.js-cv-trigger').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        Swal.fire({
            // title: 'Want to know about me??',
            text: 'You will be redirected to my CV.',

            imageUrl: 'assets/fotoku-cv.png',
            imageWidth: 230,
            imageHeight: 210,
            imageAlt: 'My Photo',

            showCancelButton: true,
            confirmButtonText: 'Yes, show me',
            cancelButtonText: 'Maybe later',
            reverseButtons: true,
            allowOutsideClick: false,

            customClass: {
                popup: 'custom-swal',
                image: 'swal-photo',
                confirmButton: 'swal-confirm-btn',
                cancelButton: 'swal-cancel-btn'
            },

            buttonsStyling: false,

            showClass: {
                popup: 'animate__animated custom-popup-in'
            },
            hideClass: {
                popup: 'animate__animated custom-popup-out'
            }
        }).then((result) => {

            if (result.isConfirmed) {
                window.open('assets/CV-Jennatul-Macwe.pdf', '_blank');
            }

            if (result.dismiss === Swal.DismissReason.cancel) {
                setTimeout(() => {
                    Swal.fire({
                        icon: 'info',
                        title: 'No worries',
                        text: 'You can view it anytime!',
                        timer: 1600,
                        showConfirmButton: false,
                        customClass: {
                            popup: 'custom-swal swal-noworries'
                        },
                        showClass: {
                            popup: 'animate__animated custom-popup-in'
                        }
                    });
                }, 250);
            }
        });
    });
});