// ===============================
// BURGER MENU MOBILE
// ===============================
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
    });
}

// ===============================
// POSTER SWIPE
// ===============================
const posterContainer = document.getElementById("posterContainer");
const nextBtn = document.getElementById("nextPoster");
const prevBtn = document.getElementById("prevPoster");

if (posterContainer && nextBtn && prevBtn) {
    const scrollAmount = 200;

    nextBtn.addEventListener("click", () => {
        posterContainer.scrollLeft += scrollAmount;
        checkArrow();
    });

    prevBtn.addEventListener("click", () => {
        posterContainer.scrollLeft -= scrollAmount;
        checkArrow();
    });

    function checkArrow() {
        const maxScrollLeft =
            posterContainer.scrollWidth - posterContainer.clientWidth;

        // panah kiri
        if (posterContainer.scrollLeft <= 0) {
            prevBtn.style.display = "none";
        } else {
            prevBtn.style.display = "block";
        }

        // panah kanan
        if (posterContainer.scrollLeft >= maxScrollLeft - 5) {
            nextBtn.style.opacity = "0";
        } else {
            nextBtn.style.opacity = "1";
        }
    }

    // cek posisi awal
    checkArrow();
}

// ===============================
// TOMBOL DOWNLOAD / VIEW CV
// ===============================
document.querySelectorAll(".js-cv-trigger").forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();

        Swal.fire({
            text: "You will be redirected to my CV.",

            imageUrl: "assets/fotoku-cv.png",
            imageWidth: 230,
            imageHeight: 210,
            imageAlt: "My Photo",

            showCancelButton: true,
            confirmButtonText: "Yes, show me",
            cancelButtonText: "Maybe later",
            reverseButtons: true,

            allowOutsideClick: true,

            customClass: {
                popup: "custom-swal",
                image: "swal-photo",
                confirmButton: "swal-confirm-btn",
                cancelButton: "swal-cancel-btn"
            },

            buttonsStyling: false,

            showClass: {
                popup: "animate__animated custom-popup-in"
            },
            hideClass: {
                popup: "animate__animated custom-popup-out"
            }
        }).then((result) => {

            if (result.isConfirmed) {
                window.open("assets/CV-Jennatul-Macwe.pdf", "_blank");
            }

            if (result.dismiss === Swal.DismissReason.cancel) {
                setTimeout(() => {
                    Swal.fire({
                        icon: "info",
                        title: "No worries",
                        text: "You can view it anytime!",
                        timer: 1600,
                        showConfirmButton: false,
                        customClass: {
                            popup: "custom-swal swal-noworries"
                        },
                        showClass: {
                            popup: "animate__animated custom-popup-in"
                        }
                    });
                }, 250);
            }
        });
    });
});



// ============
// web
// ============

// const giziCard = document.querySelector('.web-card:nth-child(1)');
// const giziDetail = document.getElementById('giziDetail');

// giziCard.addEventListener('click', (e) => {
//     e.preventDefault();

//     giziDetail.classList.add('show');

//     document.querySelectorAll('.web-card').forEach(card =>
//         card.classList.remove('active-card')
//     );
//     giziCard.classList.add('active-card');

//     const offset = 400; 
//     const targetPosition =
//         giziDetail.getBoundingClientRect().top + window.pageYOffset - offset;

//     window.scrollTo({
//         top: targetPosition,
//         behavior: 'smooth'
//     });
// });

// const tabButtons = document.querySelectorAll(".detail-btn");
// const tabPanels = document.querySelectorAll(".tab-panel");

// tabButtons.forEach(btn => {
//     btn.addEventListener("click", () => {

//         // reset button
//         tabButtons.forEach(b => b.classList.remove("active"));
//         btn.classList.add("active");

//         // reset panel
//         tabPanels.forEach(panel => panel.classList.remove("active"));

//         // show target panel
//         const target = btn.dataset.tab;
//         const targetPanel = document.getElementById(`tab-${target}`);

//         if (targetPanel) {
//             targetPanel.classList.add("active");
//         }
//     });
// });

// // ===============================
// // PROJECT CARD → DETAIL TOGGLE
// // ===============================

// const cards = document.querySelectorAll(".web-card");
// const details = document.querySelectorAll(".project-detail");

// cards.forEach(card => {
//     card.addEventListener("click", e => {
//         e.preventDefault();

//         const project = card.dataset.project;
//         const targetDetail = document.getElementById(project + "Detail");

//         if (!targetDetail) return;

//         // 1. Tutup semua detail
//         details.forEach(d => d.classList.remove("show"));

//         // 2. Reset semua card
//         cards.forEach(c => c.classList.remove("active-card"));

//         // 3. Aktifkan card yg diklik
//         card.classList.add("active-card");

//         // 4. Tampilkan detail target
//         targetDetail.classList.add("show");

//         // 5. Reset TAB di detail itu
//         const btns = targetDetail.querySelectorAll(".detail-btn");
//         const panels = targetDetail.querySelectorAll(".tab-panel");

//         btns.forEach(b => b.classList.remove("active"));
//         panels.forEach(p => p.classList.remove("active"));

//         const defaultBtn = targetDetail.querySelector('[data-tab="ui"]');
//         const defaultPanel = targetDetail.querySelector("#tab-ui");

//         if (defaultBtn && defaultPanel) {
//             defaultBtn.classList.add("active");
//             defaultPanel.classList.add("active");
//         }

//         // 6. Scroll HALUS (ga jauh)
//         const y =
//             targetDetail.getBoundingClientRect().top +
//             window.pageYOffset -
//             120;

//         window.scrollTo({
//             top: y,
//             behavior: "smooth"
//         });
//     });
// });

// ===============================
// TAB SYSTEM (GLOBAL - TETAP)
// ===============================

// const tabButtons = document.querySelectorAll(".detail-btn");
// const tabPanels = document.querySelectorAll(".tab-panel");

// tabButtons.forEach(btn => {
//     btn.addEventListener("click", () => {

//         tabButtons.forEach(b => b.classList.remove("active"));
//         btn.classList.add("active");

//         tabPanels.forEach(panel => panel.classList.remove("active"));

//         const target = btn.dataset.tab;
//         const targetPanel = document.getElementById(`tab-${target}`);

//         if (targetPanel) {
//             targetPanel.classList.add("active");
//         }
//     });
// });


// // ===============================
// // PROJECT CARD → DETAIL TOGGLE
// // (GIZI BEHAVIOR DIPERTAHANKAN)
// // ===============================

// const cards = document.querySelectorAll(".web-card");
// const details = document.querySelectorAll(".project-detail");

// cards.forEach(card => {
//     card.addEventListener("click", e => {
//         e.preventDefault();

//         const project = card.dataset.project;
//         const targetDetail = document.getElementById(project + "Detail");
//         if (!targetDetail) {
//             console.error("Detail tidak ditemukan untuk:", project);
//             return;
//         }

//         // 1. Tutup semua detail
//         details.forEach(d => d.classList.remove("show"));

//         // 2. Reset semua card
//         cards.forEach(c => c.classList.remove("active-card"));

//         // 3. Aktifkan card yang diklik
//         card.classList.add("active-card");

//         // 4. Tampilkan detail target
//         targetDetail.classList.add("show");

//         // ===============================
//         // DEFAULT TAB = UI
//         // ===============================

//         // reset tab GLOBAL 
//         tabButtons.forEach(b => b.classList.remove("active"));
//         tabPanels.forEach(p => p.classList.remove("active"));

//         const defaultBtn = targetDetail.querySelector('[data-tab="ui"]');
//         const defaultPanel = targetDetail.querySelector('#tab-ui');

//         if (defaultBtn && defaultPanel) {
//             defaultBtn.classList.add("active");
//             defaultPanel.classList.add("active");
//         }

//         // ===============================
//         // SCROLL OTOMATIS (LEBIH DEKAT)
//         // ===============================
//         window.scrollTo({
//             top:
//                 targetDetail.getBoundingClientRect().top +
//                 window.pageYOffset -
//                 400,
//             behavior: "smooth"
//         });
//     });
// });

document.querySelectorAll(".project-detail").forEach(project => {
    const buttons = project.querySelectorAll(".detail-btn");
    const panels = project.querySelectorAll(".tab-panel");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.dataset.tab;

            // reset tab di project ini aja
            buttons.forEach(b => b.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            btn.classList.add("active");

            const targetPanel = project.querySelector(
                `.tab-panel[data-tab="${target}"]`
            );

            if (targetPanel) {
                targetPanel.classList.add("active");
            }
        });
    });
});

const cards = document.querySelectorAll(".web-card");
const details = document.querySelectorAll(".project-detail");

cards.forEach(card => {
    card.addEventListener("click", e => {
        e.preventDefault();

        const project = card.dataset.project;
        const targetDetail = document.getElementById(project + "Detail");

        if (!targetDetail) return;

        // 1. sembunyikan semua detail
        details.forEach(d => d.classList.remove("show"));

        // 2. reset card aktif
        cards.forEach(c => c.classList.remove("active-card"));

        // 3. aktifkan card
        card.classList.add("active-card");

        // 4. tampilkan detail
        targetDetail.classList.add("show");

        // ==========================
        // DEFAULT TAB = UI
        // ==========================
        const buttons = targetDetail.querySelectorAll(".detail-btn");
        const panels = targetDetail.querySelectorAll(".tab-panel");

        buttons.forEach(b => b.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));

        const defaultBtn = targetDetail.querySelector('[data-tab="ui"]');
        const defaultPanel = targetDetail.querySelector(
            '.tab-panel[data-tab="ui"]'
        );

        if (defaultBtn && defaultPanel) {
            defaultBtn.classList.add("active");
            defaultPanel.classList.add("active");
        }

        // ==========================
        // AUTO SCROLL
        // ==========================
        window.scrollTo({
            top:
                targetDetail.getBoundingClientRect().top +
                window.pageYOffset -
                150,
            behavior: "smooth"
        });
    });
});
