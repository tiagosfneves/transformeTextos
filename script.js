document.addEventListener("DOMContentLoaded", function() {    
    document.querySelector("#btnMaiuscula").addEventListener("click", function() {
        let inputText = document.querySelector("#input-text").value;
        document.querySelector("#result").innerHTML = inputText.toUpperCase();
    });
    document.querySelector("#btnMinuscula").addEventListener("click", function() {
        let inputText = document.querySelector("#input-text").value;
        document.querySelector("#result").innerHTML = inputText.toLowerCase();
    });
});
