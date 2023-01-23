import {
    changeValuesToPay,
    checkInputIsEmpty,
    removeSelectedBtn,
} from "./functions";

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

bill.addEventListener("keyup", () => {
    if (bill.value.length > 0) {
        reset.classList.add("active-reset");
    } else {
        reset.classList.remove("active-reset");
    }

    changeValuesToPay(
        Number(bill.value),
        Number(peopleNumber.value),
        tipValue,
        totalValue
    );
    checkInputIsEmpty(bill, peopleNumber, tipValue, totalValue);
});

peopleNumber.addEventListener("keyup", () => {
    changeValuesToPay(
        Number(bill.value),
        Number(peopleNumber.value),
        tipValue,
        totalValue
    );
    checkInputIsEmpty(bill, peopleNumber, tipValue, totalValue);
});

percent.forEach((button) => {
    button.addEventListener("click", () => {
        removeSelectedBtn();

        button.classList.add("active-percent");
        changeValuesToPay(
            Number(bill.value),
            Number(peopleNumber.value),
            tipValue,
            totalValue
        );
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

    reset.classList.remove("active-reset");
});
