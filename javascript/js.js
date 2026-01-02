// pesan awal masuk halaman index
document.addEventListener("DOMContentLoaded", function () {
    let userName = localStorage.getItem("username");

    if (!userName) {
        Swal.fire({
            title: 'Hewoo!',
            text: 'Boleh isi nama kamu dulu?',
            input: 'text',
            inputPlaceholder: 'Nama kamu...',
            confirmButtonText: "Let's Go!!",
            allowOutsideClick: false,
            allowEscapeKey: false,

            customClass: {
                popup: 'custom-popup',
                confirmButton: 'custom-confirm-btn'
            },
            showClass: {
                popup: 'animate__animated'
            },
            didOpen: (popup) => {
                popup.style.animation = 'popupIn 0.3s ease-out';
            },
            willClose: (popup) => {
                popup.style.animation = 'popupOut 0.3s ease-in';
            },
            inputValidator: (value) => {
                if (!value) {
                    return 'Nama tidak boleh kosong yaa';
                }
            }
        }).then((result) => {
            const name = result.value || "User";
            localStorage.setItem("username", name);
            document.getElementById("username").textContent = name;
        });
    } else {
        document.getElementById("username").textContent = userName;
    }
});

// BURGER MENU MOBILE
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});


// MASSAGE
// document.getElementById("msgForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     const name = document.getElementById("nameInput").value;
//     const msg = document.getElementById("msgInput").value;

//     document.getElementById("outputBox").textContent =
//         "Name: " + name + "\n\nMessage: " + msg;
// });

document.querySelectorAll('a[download]').forEach(link => {
  link.addEventListener('click', e => {
    const isMobile = /Android/i.test(navigator.userAgent);
    if (isMobile) {
      e.preventDefault();
      window.location.href = link.href;
    }
  });
});

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