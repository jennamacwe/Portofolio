document.addEventListener("DOMContentLoaded", function () {
    let userName = prompt("Hewoo! Boleh isi nama kamu dulu?");

    if (userName === "" || userName === null) {
        userName = "User";
    }

    document.getElementById("username").textContent = userName;
});

document.getElementById("msgForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("nameInput").value;
    const msg = document.getElementById("msgInput").value;

    document.getElementById("outputBox").textContent =
        "Name: " + name + "\n\nMessage: " + msg;
});
