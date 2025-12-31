// USERNAME
document.addEventListener("DOMContentLoaded", function () {
    let userName = localStorage.getItem("username");

    if (!userName) {
        userName = prompt("Hewoo! Boleh isi nama kamu dulu?");

        if (userName === "" || userName === null) {
            userName = "User";
        }

        localStorage.setItem("username", userName);
    }

    document.getElementById("username").textContent = userName;
});


// BURGER MENU
// const burgerBtn = document.getElementById("burgerBtn");
// const sideMenu = document.getElementById("sideMenu");

// burgerBtn.addEventListener("click", () => {
//     sideMenu.classList.toggle("show");
// });

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
