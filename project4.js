
document.addEventListener("DOMContentLoaded", function () {

    const investmentInput = document.getElementById("investment");
    const rateInput = document.getElementById("investment-rate");
    const timeInput = document.getElementById("time-period");

    const investmentValue = document.getElementById("investment-value");
    const rateValue = document.getElementById("investment-rate-value");
    const timeValue = document.getElementById("time-period-value");

    
    investmentInput.addEventListener("input", function () {
        investmentValue.innerText = Number(this.value).toLocaleString("en-IN");
    });


    rateInput.addEventListener("input", function () {
        rateValue.innerText = this.value + "%";
    });

    timeInput.addEventListener("input", function () {
        timeValue.innerText = this.value;
    });


    investmentValue.innerText = Number(investmentInput.value).toLocaleString("en-IN");
    rateValue.innerText = rateInput.value + "%";
    timeValue.innerText = timeInput.value;
});

// FD calculation function
function calculateFD() {

    const principal = Number(document.getElementById("investment").value);
    const rate = Number(document.getElementById("investment-rate").value);
    const time = Number(document.getElementById("time-period").value);

    const n = 4;

    const totalAmount =
        principal * Math.pow(1 + (rate / 100) / n, n * time);

    const interestEarned = totalAmount - principal;

  
    document.getElementById("invested-amount").innerText =
        "₹ " + principal.toLocaleString("en-IN");

    document.getElementById("estimated-returns").innerText =
        "₹ " + interestEarned.toFixed(2);

    document.getElementById("total-value").innerText =
        "₹ " + totalAmount.toFixed(2);

    document.getElementById("estimated-amount").innerHTML
}
