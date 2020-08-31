let amount = prompt("Amount to convert")
amount = parseInt(amount)
if (isNaN(amount)) {
    alert("Invalid entry. Please enter a number!")
    prompt("Amount to convert")
}
let fromCurrency = prompt("from currency")
fromCurrency = fromCurrency.toUpperCase()
let toCurrency = prompt("to currency")
toCurrency = toCurrency.toUpperCase()
let ratio = 23000
let result = 0

if(fromCurrency == "VND"){
    result = (amount / ratio).toFixed(2)
}else if(fromCurrency == "USD"){
    result = amount * ratio
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
}

console.log(formatCurrency(fromCurrency, amount), "is", formatCurrency(toCurrency, result))