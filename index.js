
function convert() {
    let amount = document.getElementById("amount").value;
    let r = amount / 23000;
    document.getElementById("result").innerText = `Result: ${r} $`;
}

//document.write("Result: " + r + " $");