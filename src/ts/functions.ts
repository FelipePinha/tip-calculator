export const changeValuesToPay = (
    bill: number,
    peopleNumber: number,
    tipValue: HTMLParagraphElement,
    totalValue: HTMLParagraphElement
) => {
    const selectedBtn = document.querySelector(
        "#percent-btn.active-percent"
    ) as HTMLButtonElement;
    const [percentValue] = selectedBtn.innerHTML.split("%");

    const percent = (Number(percentValue) / 100) * bill;
    const tipToPay = percent / peopleNumber;
    const totalToPay = (bill + percent) / peopleNumber;

    tipValue.innerHTML = "$" + tipToPay.toFixed(2);
    totalValue.innerHTML = "$" + totalToPay.toFixed(2);
};

export const checkInputIsEmpty = (
    bill: HTMLInputElement,
    peopleNumber: HTMLInputElement,
    tipValue: HTMLParagraphElement,
    totalValue: HTMLParagraphElement
) => {
    if (bill.value === "" || peopleNumber.value === "") {
        tipValue.innerHTML = "$0.00";
        totalValue.innerHTML = "$0.00";
    }
};

export const removeSelectedBtn = () => {
    const selectedBtn = document.querySelector(
        "#percent-btn.active-percent"
    ) as HTMLButtonElement;
    if (selectedBtn === null) return;

    selectedBtn.classList.remove("active-percent");
};
