const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("praRzonUser", JSON.stringify(user));

        alert("Account created successfully!");

        window.location.href = "login.html";

    });
}


const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        const savedUser = JSON.parse(
            localStorage.getItem("praRzonUser") || "null"
        );

        if (
            savedUser &&
            email === savedUser.email &&
            password === savedUser.password
        ) {

            alert("Login successful. Welcome, " + savedUser.name + "!");

        } else {

            alert("Invalid email or password.");

        }

    });
}

