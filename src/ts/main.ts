const bill = document.querySelector("#bill") as HTMLInputElement;
const percent = document.querySelectorAll("#percent-btn");
const reset = document.querySelector("#reset") as HTMLButtonElement;

const peopleNumber = document.querySelector(
    "#people-number"
) as HTMLInputElement;

const tipValue = document.querySelector("#tip-value") as HTMLParagraphElement;
const totalValue = document.querySelector(
    "#total-value"
) as HTMLParagraphElement;

const checkInputIsEmpty = () => {
    if (bill.value === "" || peopleNumber.value === "") {
        tipValue.innerHTML = "$0.00";
        totalValue.innerHTML = "$0.00";
    }
};

const changeValuesToPay = () => {
    const selectedBtn = document.querySelector(
        "#percent-btn.active-percent"
    ) as HTMLButtonElement;
    const [percentValue] = selectedBtn.innerHTML.split("%");

    const percent = (Number(percentValue) / 100) * Number(bill.value);
    const tipToPay = percent / Number(peopleNumber.value);
    const totalToPay =
        (Number(bill.value) + percent) / Number(peopleNumber.value);

    tipValue.innerHTML = "$" + tipToPay.toFixed(2);
    totalValue.innerHTML = "$" + totalToPay.toFixed(2);
};

bill.addEventListener("keyup", () => {
    if (bill.value.length > 0) {
        reset.classList.add("active-reset");
    } else {
        reset.classList.remove("active-reset");
    }

    changeValuesToPay();
    checkInputIsEmpty();
});

peopleNumber.addEventListener("keyup", () => {
    changeValuesToPay();
    checkInputIsEmpty();
});

const removeSelectedBtn = () => {
    const selectedBtn = document.querySelector(
        "#percent-btn.active-percent"
    ) as HTMLButtonElement;

    if (selectedBtn === null) return;

    selectedBtn.classList.remove("active-percent");
};

percent.forEach((button) => {
    button.addEventListener("click", () => {
        removeSelectedBtn();

        button.classList.add("active-percent");
        changeValuesToPay();
    });
});

reset.addEventListener("click", () => {
    if (!reset.classList.contains("active-reset")) return;

    bill.value = "";
    peopleNumber.value = "1";
    tipValue.innerHTML = "$0.00";
    totalValue.innerHTML = "$0.00";
    removeSelectedBtn();
    percent[0].classList.add("active-percent");
});
