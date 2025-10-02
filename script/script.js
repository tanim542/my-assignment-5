const callHistoryList = [];
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

        // coin reduction
        const currentCoin = getInnerNum("available-coin");
        if (currentCoin >= 20) {
            let newCoin = currentCoin - 20;
            document.getElementById("available-coin").innerText = newCoin;
        }
        else {
            alert("You don't have enough coin to make a call. Please recharge your coins.");
            return;
        }

        // call history
        const callHistory = {
            tittle: Tittle,
            number: Num,
            time: new Date().toLocaleString()
        };
        callHistoryList.push(callHistory);
        const callHistoryContainer = document.getElementById("call-history-container");
        document.getElementById("call-history-container").style.display = "block";
        callHistoryContainer.innerHTML = " ";
        for (let call of callHistoryList) {
            const div = document.createElement("div");
            div.innerHTML = `<div class="flex justify-between items-center rounded-lg p-4 bg-[#fafafa] my-4">
                    <div>
                        <h1 class="text-lg font-semibold">${call.tittle}</h1>
                        <p class="text-lg font-normal text-[#5C5C5C]">${call.number}</p>
                    </div>
                    <div>
                        <h1 class="text-lg font-normal">${call.time}</h1>
                    </div>
                </div>`
            callHistoryContainer.appendChild(div);
        }

        // clear call history  
        const clearBtn = document.getElementById("clear-btn");

        clearBtn.addEventListener('click', function () {

            const parent = document.getElementById("call-history-container");
            parent.innerText = '';
        })

    });
}