// function newconvert() {
//     let amount = document.getElementById("inputAmount").value;
//     let usdToVnd = 23000
//     let usdToEur = 0.84
//     let usdToKrw = 1186
//     let eurToVnd = 27650
//     let eurToKrw = 1415
//     let vndToKrw = 0.05
//     let result = 0

//     document.getElementById("resultArea").innerHTML = `converted amount is ${result}`

//     if (fromCurrency === "USD") {
//         if (toCurrency === "VND") {
//             result = amount * usdToVnd
//             console.log(formatCurrency(fromCurrency, amount), "is", formatCurrency(toCurrency, result))
//         } else if (toCurrency === "EUR") {
//             result = (amount * usdToEur).toFixed(2)
//             console.log(formatCurrency(fromCurrency, amount), "is", formatCurrency(toCurrency, result))
//         } else if (toCurrency === "KRW") {
//             result = (amount * usdToKrw)
//             console.log(formatCurrency(fromCurrency, amount), "is", formatCurrency(toCurrency, result))
//         }
//     } else if (fromCurrency === "VND") {
//         if (toCurrency === "USD") {
//             result = (amount / usdToVnd).toFixed(2)
//             console.log(formatCurrency(fromCurrency, amount), "is", formatCurrency(toCurrency, result))
//         } else if (toCurrency === "EUR") {
//             result = (amount / eurToVnd).toFixed(2)
//             console.log(formatCurrency(fromCurrency, amount), "is", formatCurrency(toCurrency, result))
//         } else if (toCurrency === "KRW") {
//             result = (amount * vndToKrw)
//             console.log(formatCurrency(fromCurrency, amount), "is", formatCurrency(toCurrency, result))
//         }
//     }
// }

// function convert() {
//     let amount = prompt("Amount to convert")
//     amount = parseInt(amount)
//     if (isNaN(amount) == true) {
//         alert("Invalid entry. Please enter a number!")
//         return;
//     }

//     let fromCurrency = prompt("from currency").toUpperCase()
//     let toCurrency = prompt("to currency").toUpperCase()

//     let usdToVnd = 23000
//     let usdToEur = 0.84
//     let usdToKrw = 1186
//     let eurToVnd = 27650
//     let eurToKrw = 1415
//     let vndToKrw = 0.05
//     let result = 0

//     if (fromCurrency === "USD") {
//         if (toCurrency === "VND") {
//             result = amount * usdToVnd
//             console.log(formatCurrency(fromCurrency, amount), "is", formatCurrency(toCurrency, result))
//         } else if (toCurrency === "EUR") {
//             result = (amount * usdToEur).toFixed(2)
//             console.log(formatCurrency(fromCurrency, amount), "is", formatCurrency(toCurrency, result))
//         } else if (toCurrency === "KRW") {
//             result = (amount * usdToKrw)
//             console.log(formatCurrency(fromCurrency, amount), "is", formatCurrency(toCurrency, result))
//         }
//     } else if (fromCurrency === "VND") {
//         if (toCurrency === "USD") {
//             result = (amount / usdToVnd).toFixed(2)
//             console.log(formatCurrency(fromCurrency, amount), "is", formatCurrency(toCurrency, result))
//         } else if (toCurrency === "EUR") {
//             result = (amount / eurToVnd).toFixed(2)
//             console.log(formatCurrency(fromCurrency, amount), "is", formatCurrency(toCurrency, result))
//         } else if (toCurrency === "KRW") {
//             result = (amount * vndToKrw)
//             console.log(formatCurrency(fromCurrency, amount), "is", formatCurrency(toCurrency, result))
//         }
//     } else {
//         alert("Please choose between VND, USD, EUR or KRW.")
//     }
// }

// function formatCurrency(type, value) {
//     const formatter = new Intl.NumberFormat(type, {
//         currency: type,
//         style: "currency"
//     });
//     return formatter.format(value);
// }

let ratio = 23000;
let result = 0;
const currencyRatio = {
    VND: {
        USD: 0.000043,
        KRW: 0.051,
        EUR: 0.000039,
        VND: 1
    },
    EUR: {
        USD: 1.19745,
        KRW: 1416.82,
        EUR: 1,
        VND: 27770.8
    },
    USD: {
        USD: 1,
        KRW: 1193.27,
        EUR: 0.9,
        VND: 23235.5
    },
    KRW: {
        USD: 0.00084,
        KRW: 1,
        EUR: 0.00075,
        VND: 19.47
    }
};

function getConversionRate(fromCurrency, toCurrency) {
    return currencyRatio[fromCurrency][toCurrency];
}

function convert() {
    let amount = document.getElementById("inputAmount").value; // .value will read the value
    //   console.log("amout?", amount);
    let fromCurrency = document.getElementById("fromCurrencySelector").value;
    let toCurrency = document.querySelector('input[name="toCurrencySelector"]:checked').value;

    result = amount * currencyRatio[fromCurrency][toCurrency];
    result = formatCurrency(toCurrency, result);

    document.getElementById("resultArea").innerHTML = `${formatCurrency(fromCurrency, amount)} = ${result}`; // .innerHTML will write in html
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency",
    });
    return formatter.format(value);
}

