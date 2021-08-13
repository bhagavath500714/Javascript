const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    let message = 'hai how r u?'
    createNotification(message);
});

function createNotification(msg) {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = msg;

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}
