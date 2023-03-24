'use script'
//input element from user
//form input
let inputEl = document.getElementById("input-text");
let amountEl = document.getElementById("amount");
let submitEl = document.getElementById("submit");

//user apply output
let balanceEl = document.getElementById("balance");
let incomeEl = document.getElementById("income");
let outcomeEl = document.getElementById("outcome");

//user display elements
let listEl = document.getElementById("list");

//dummydata
let dummydata = [
    {id: 1, inputEl: "flower", amountEl: -200},
    {id: 2, inputEl: "salary", amountEl: 12000},
]
//function
let transactions = dummydata;

function loadtransaction(transaction){
    const sign = transaction.amountEl < 0 ? "-": "+";
    const item = document.createElement("li");
    console.log(item)
    item.classList.add(transaction.amountEl < 0 ? "outcome-list": "income-list");
    item.innerHTML = `
    <span>${transaction.inputEl}</span>
    <span>${sign}${Math.abs(transaction.amountEl)}</span>
    <button onclick="removeTrans(${transaction.id})">␡</button>`
    listEl.appendChild(item);
}

function removeTrans(id){
    // console.log(id);
    transactions = transactions.filter((transaction)=> transaction.id != id);
    config();
}
function updateAmount(){
    let amounts = transactions.map((transaction)=> transaction.amountEl);
    console.log(amounts);
    let totalBalance = amounts.reduce(((acc,val) => acc+=val),0);
    console.log(totalBalance);
    balanceEl.textContent = `₹${totalBalance}`;

    let incomeValue = amounts.filter((val)=> val > 0).reduce(((acc,val)=>acc+=val),0);
    incomeEl.textContent =`₹${incomeValue}`;

    let outcomeValue = amounts.filter((val)=> val < 0).reduce(((acc,val)=>acc+=val),0);
    outcomeEl.textContent =`₹${Math.abs(outcomeValue)}`;

}
function config(){
    listEl.innerHTML = "";
    transactions.forEach(loadtransaction);
    updateAmount();
}


//add Event listners
window.addEventListener("load", function(){
    config()
})
submitEl.addEventListener("click", function(e){
    e.preventDefault();
    let input = inputEl.value;
    let amount = amountEl.value;
    console.log(input, amount)
})