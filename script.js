const btn = document.getElementById("calc");
const billipt = document.getElementById("bill");
const tipipt = document.getElementById("tip");
const total = document.getElementById("total1");

function calcTotal(){
    let billVal = billipt.value;
    let tipVal = tipipt.value;
    let totalVal = billVal * (1 + tipVal/100);
    total.innerText = totalVal.toFixed(2);
}




btn.addEventListener("click", calcTotal);