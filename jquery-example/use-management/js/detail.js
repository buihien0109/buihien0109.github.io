// Get id from url
const params = new URLSearchParams(window.location.search);
const userId = params.get("id");

const users = getDataFromLocalStorage("users") ?? [];
const user = users.find((u) => u.id === Number(userId));

// Generate password
const generatePassword = () => {
    return String(Math.floor(Math.random() * 900 + 100));
};

// Display info user
const renderUser = () => {
    $("#name").val(user.name);
    $("#email").val(user.email);
    $("#phone").val(user.phone);
    $("#password").val(user.password);
};

// Update info user
$("#btn-save").click(() => {
    let name = $("#name").val();
    let phone = $("#phone").val();

    user.name = name;
    user.phone = phone;
    saveDataToLocalStorage("users", users);

    alert(`Update info user successfully`);
});

// Update password
$("#btn-change-password").click(() => {
    let oldPassword = $("#old-password").val();
    let newPassword = $("#new-password").val();

    console.log({ oldPassword, newPassword, userPass: user.password });
    if (oldPassword !== user.password) {
        alert("Old password incorrect");
        return;
    }

    if (oldPassword === newPassword) {
        alert("Old password and new password can't not same");
        return;
    }

    user.password = newPassword;
    saveDataToLocalStorage("users", users);

    alert("Update password successfully");
});

// Forgot password
$("#btn-forgot-password").click(() => {
    let newPassword = generatePassword();

    user.password = newPassword;
    saveDataToLocalStorage("users", users);

    alert(`New password : ${newPassword}`);
});

renderUser();
