// function to get inner text value
function getInnerText(id) {
    const value = parseInt(document.getElementById(id).innerText);
    return value;
}

// function to set innerText
function setInnerText(value) {
    document.getElementById("available-balance").innerText = value;
}

const heartIcons = document.getElementsByClassName("heart-icons");
for(let heartIcon of heartIcons) {
    heartIcon.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("heart-count").innerText = parseInt(document.getElementById("heart-count").innerText) + 1;
    });
}

