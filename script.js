function transformeMaiuscula() {
    let inputText = document.getElementById("input-text").value;
    document.getElementById("result").innerHTML = inputText.toUpperCase();
    document.getElementById("result").style.color = "#000";
}

function transformeMinuscula() {
    let inputText = document.getElementById("input-text").value;
    document.getElementById("result").innerHTML = inputText.toLowerCase();
    document.getElementById("result").style.color = "#000";
}

function transformePrimeiraMaiuscula() {
    let inputText = document.getElementById("input-text").value.toLowerCase();

    let textoCapitalizado = inputText.replace(/(^\s*\w|[.!?;]\s*\w)/g, (letra) => letra.toUpperCase());
    
    document.getElementById("result").innerHTML = textoCapitalizado;
    document.getElementById("result").style.color = "#000";
}

function limpar() {
    document.getElementById("input-text").value = "";     
    document.getElementById("result").innerHTML = "";
}

function trocarTema() {
    const body = document.body;
    body.classList.toggle("dark-theme");

    const botaoTema = document.getElementById("btnTema");
    if (body.classList.contains("dark-theme")) {
        botaoTema.textContent = "☀️";
    } else {
        botaoTema.textContent = "🌙";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnMaiuscula").addEventListener("click", transformeMaiuscula);

    document.getElementById("btnMinuscula").addEventListener("click", transformeMinuscula);

    document.getElementById("btnCapitalizar").addEventListener("click", transformePrimeiraMaiuscula);

    document.getElementById("btnLimpar").addEventListener("click", limpar);

    document.getElementById("btnTema").addEventListener("click", trocarTema);
});
