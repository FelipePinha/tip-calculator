const bill = document.querySelector("#bill") as HTMLInputElement;
const peopleNumber = document.querySelector(
    "#people-number"
) as HTMLInputElement;
const percent = document.querySelectorAll("#percent-btn");

const totalValue = document.querySelector(
    "#total-value"
) as HTMLParagraphElement;

const tipValue = document.querySelector("#tip-value") as HTMLParagraphElement;

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
    changeValuesToPay();
    checkInputIsEmpty();
});

peopleNumber.addEventListener("keyup", () => {
    changeValuesToPay();
    checkInputIsEmpty();
});

const selectedBtn = () => {
    const selectedBtn = document.querySelector(
        "#percent-btn.active-percent"
    ) as HTMLButtonElement;
    selectedBtn.classList.remove("active-percent");
};

percent.forEach((button) => {
    button.addEventListener("click", () => {
        selectedBtn();

        button.classList.add("active-percent");
        changeValuesToPay();
    });
});
