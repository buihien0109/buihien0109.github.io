const randomId = () => {
    return Math.floor(Math.random() * 1000);
};

const users = getDataFromLocalStorage("users") ?? [];

$("#btn-save").click(() => {
    let name = $("#name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let password = $("#password").val();

    // Check email
    let emailIsExist = users.some((user) => user.email === email);
    if (emailIsExist) {
        alert("Email is existed");
        return;
    }

    // Add to localStorage
    const newUser = { id: randomId(), name, email, phone, password };
    users.push(newUser);
    saveDataToLocalStorage("users", users);

    // Clear data
    $("#name").val("");
    $("#email").val("");
    $("#phone").val("");
    $("#password").val("");

    alert("Add user successfully");

    // Redirect
    setTimeout(() => {
        window.location.href = "./index.html";
    }, 1000);
});
