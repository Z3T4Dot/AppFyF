document.getElementById("register-forms").addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: e.target.user.value,
            email: e.target.email.value,
            password: e.target.password.value,
        })
    });
})