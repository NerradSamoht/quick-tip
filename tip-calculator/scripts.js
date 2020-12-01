let container = document.querySelector("#container");
container.addEventListener('input', update);

function formatMoney(value) {
  value = Math.ceil(value * 100) / 100;
  value = value.toFixed(2);
  return "£ " + value;
}

function formatSplit(value) {
  if (value === "1") return value + " person";
  return value + " people";
}

function update() {
  let bill = Number(document.querySelector('#yourBill').value);
  let tipPercent = document.querySelector('#tipInput').value;
  let split = document.querySelector('#splitInput').value;

  let tipValue = bill * (tipPercent / 100);
  let tipEach = tipValue / split;
  let newBillEach = (bill + tipValue) / split;

  document.querySelector('#tipPercent').innerHTML = tipPercent + "%";
  document.querySelector('#tipValue').innerHTML = formatMoney(tipValue);
  document.querySelector('#totalWithTip').innerHTML = formatMoney(bill + tipValue);
  document.querySelector('#splitValue').innerHTML = formatSplit(split);
  document.querySelector('#billEach').innerHTML = formatMoney(newBillEach);
  document.querySelector('#tipEach').innerHTML = formatMoney(tipEach);

}