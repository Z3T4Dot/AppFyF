document.getElementById("register-forms").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target.user);
})