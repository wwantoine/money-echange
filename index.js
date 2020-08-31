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
let usdToVnd = 23000
let usdToEur = 0.84
let usdToKrw = 1186
let eurToVnd = 27650
let eurToKrw = 1415
let vndToKrw = 0.05
let result = 0

if(fromCurrency == "USD"){
    if(toCurrency == "VND"){
        result = amount * usdToVnd
    }else if(toCurrency == "EUR"){
        result = (amount * usdToEur).toFixed(2)
    }else if(toCurrency == "KRW"){
        result = (amount * usdToKrw)
    }
}else if(fromCurrency == "VND"){
    if(toCurrency == "USD"){
        result = (amount / usdToVnd).toFixed(2)
    }else if(toCurrency == "EUR"){
        result = (amount / eurToVnd).toFixed(2)
    }
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
}

console.log(formatCurrency(fromCurrency, amount), "is", formatCurrency(toCurrency, result))