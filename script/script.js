// function to get inner text value
function getInnerText(id) {
    const value = document.getElementById(id).innerText;
    return value;
}
function getInnerNum(id) {
    const value = parseInt(document.getElementById(id).innerText);
    return value;
}

// function to set innerText
function setInnerText(value) {
    document.getElementById("available-balance").innerText = value;
}

const heartIcons = document.getElementsByClassName("heart-icons");
for (let heartIcon of heartIcons) {
    heartIcon.addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("heart-count").innerText = parseInt(document.getElementById("heart-count").innerText) + 1;
    });
}


const callBtn = document.getElementsByClassName("call-btn");
for (let btn of callBtn) {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        const card = btn.closest(".card");
        const Num = card.querySelector(".card-num").innerText;
        const Tittle = card.querySelector(".card-tittle").innerText;
        alert("📞 Calling.... to " + Tittle + " " + Num);
    });
}