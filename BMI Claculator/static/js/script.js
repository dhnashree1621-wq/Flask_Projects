window.onload = function () {
    const card = document.getElementById("card");
    if (card.dataset.flip === "true") {
        card.classList.add("flip");
    }
};

function flipBack() {
    const card = document.getElementById("card");
    card.classList.remove("flip");
    setTimeout(() => {
        window.location.href = "/";
    }, 1200);
}