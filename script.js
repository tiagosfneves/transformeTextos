//Função Maiúscula
function transformeMaiuscula() {
    let inputText = document.querySelector("#input-text").value;
    document.querySelector("#result").innerHTML = inputText.toUpperCase();
    document.querySelector("#result").style.color = "#000";
}
//Função minúscula
function transformeMinuscula() {
    let inputText = document.querySelector("#input-text").value;
    document.querySelector("#result").innerHTML = inputText.toLowerCase();
    document.querySelector("#result").style.color = "#000";
}
/* Função Primeira Letra Maiúscula */
function transformePrimeiraMaiuscula() {
    let inputText = document.querySelector("#input-text").value.toLowerCase();

    // Capitaliza a primeira letra e as letras após ponto, interrogação ou exclamação
    let textoCapitalizado = inputText.replace(/(^\s*\w|[.!?;]\s*\w)/g, (letra) => letra.toUpperCase());
    
    document.querySelector("#result").innerHTML = textoCapitalizado;
    document.querySelector("#result").style.color = "#000";
}
/* Função Limpar */
function limpar() {
    document.querySelector("#input-text").value = "";     // limpa o campo de entrada
    document.querySelector("#result").innerHTML = "";     // limpa o resultado
}

/* 🌗 Função Trocar Tema */
function trocarTema() {
    const body = document.body;
    body.classList.toggle("dark-theme");

    const botaoTema = document.querySelector("#btnTema");
    if (body.classList.contains("dark-theme")) {
        botaoTema.textContent = "☀️";
    } else {
        botaoTema.textContent = "🌙";
    }
}

/* Programa TRANSFORME texto */
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#btnMaiuscula").addEventListener("click", transformeMaiuscula);

    document.querySelector("#btnMinuscula").addEventListener("click", transformeMinuscula);

    document.querySelector("#btnCapitalizar").addEventListener("click", transformePrimeiraMaiuscula);

    document.querySelector("#btnLimpar").addEventListener("click", limpar);

    document.querySelector("#btnTema").addEventListener("click", trocarTema);
});
