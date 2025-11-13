// Programa com Funções como parâmetros
document.addEventListener("DOMContentLoaded", function() {    
    document.getElementById("btnMaiuscula").addEventListener("click", function() {
        let inputText = document.getElementById("input-text").value;
        document.getElementById("result").innerHTML = inputText.toUpperCase();
    });
    document.getElementById("btnMinuscula").addEventListener("click", function() {
        let inputText = document.getElementById("input-text").value;
        document.getElementById("result").innerHTML = inputText.toLowerCase();
    });
});
