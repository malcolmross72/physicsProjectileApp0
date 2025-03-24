function display() {
    var gallons = document.getElementById("gallons").value;
    document.getElementById("gallonsDisplay").innerHTML = gallons;
}

function convert() {
    var amount = parseFloat(document.getElementById("fluidAmount").value);
    var convertTo = document.querySelector('input[name="convertType"]:checked').value;
    var resultElement = document.getElementById("result");

    if (isNaN(amount) || amount < 0) {
        resultElement.innerHTML = "Please enter a valid number.";
        return;
    }

    if (convertTo === "toLitres") {
        if (amount > 1000) {
            resultElement.innerHTML = "Maximum is 1000 gallons.";
            return;
        }
        var litres = amount * 3.78541;
        resultElement.innerHTML = litres.toFixed(2) + " litres";
    } else {
        if (amount > 4000) {
            resultElement.innerHTML = "Maximum is 4000 litres.";
            return;
        }
        var gallons = amount / 3.78541;
        resultElement.innerHTML = gallons.toFixed(2) + " gallons";
    }
}