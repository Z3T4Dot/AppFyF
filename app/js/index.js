document.getElementById("register-form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.children.user)
})