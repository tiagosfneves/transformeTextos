/* ============================================================
   TRANSFORME TEXTOS — SCRIPT REORGANIZADO
   ============================================================ */

/* ============================================================
   1. EVENTOS INICIAIS (DOMContentLoaded)
   - Todos os listeners são registrados aqui
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // Botões de transformação
  document
    .querySelector("#btnMaiuscula")
    .addEventListener("click", transformeMaiuscula);

  document
    .querySelector("#btnMinuscula")
    .addEventListener("click", transformeMinuscula);

  document
    .querySelector("#btnCapitalizar")
    .addEventListener("click", transformePrimeiraMaiuscula);

  // Outros botões
  document.querySelector("#btnLimpar").addEventListener("click", limpar);

  document.querySelector("#btnTema").addEventListener("click", trocarTema);

  document.querySelector("#btnCopiar").addEventListener("click", copiarTexto);
});

/* ============================================================
   2. FUNÇÕES DE TRANSFORMAÇÃO DE TEXTO
   ============================================================ */

// MAIÚSCULA
function transformeMaiuscula() {
  let inputText = document.querySelector("#input-text").value;
  document.querySelector("#resultado").value = inputText.toUpperCase();
}

// minúscula
function transformeMinuscula() {
  let inputText = document.querySelector("#input-text").value;
  document.querySelector("#resultado").value = inputText.toLowerCase();
}

// Primeira letra maiúscula
function transformePrimeiraMaiuscula() {
  let inputText = document.querySelector("#input-text").value.toLowerCase();

  let textoCapitalizado = inputText.replace(/(^\s*\w|[.!?;]\s*\w)/g, (letra) =>
    letra.toUpperCase()
  );

  document.querySelector("#resultado").value = textoCapitalizado;
}

/* ============================================================
   3. FUNÇÕES DE CONTROLE (limpar, trocar tema)
   ============================================================ */

function limpar() {
  document.querySelector("#input-text").value = "";
  document.querySelector("#resultado").value = "";
  atualizarContador(""); // zera contador
}

function trocarTema() {
  const body = document.body;
  const containerPai = document.querySelector("#container-pai");

  body.classList.toggle("dark-theme");
  containerPai.classList.toggle("dark-theme");

  const botaoTema = document.querySelector("#btnTema");
  botaoTema.textContent = body.classList.contains("dark-theme") ? "☀️" : "🌙";
}

/* ============================================================
   4. FUNÇÃO COPIAR TEXTO
   ============================================================ */

function copiarTexto() {
  const btn = document.getElementById("btnCopiar");
  const resultado = document.getElementById("resultado");

  const texto = resultado.value;

  if (!texto || texto.trim() === "") {
    mostrarFeedback(btn, "Nada para copiar!");
    return;
  }

  navigator.clipboard
    .writeText(texto)
    .then(() => {
      mostrarFeedback(btn, "✔ Copiado!");
    })
    .catch(() => {
      mostrarFeedback(btn, "Erro ao copiar!");
    });
}

/* ============================================================
   5. FEEDBACK VISUAL NO BOTÃO
   ============================================================ */

function mostrarFeedback(botao, mensagem) {
  const span = document.getElementById("spanCopiar");
  const textoOriginal = span.textContent;

  span.textContent = mensagem;
  botao.style.opacity = "0.7";

  setTimeout(() => {
    span.textContent = textoOriginal;
    botao.style.opacity = "1";
  }, 1500);
}

/* ============================================================
   6. CONTADOR DE CARACTERES E PALAVRAS
   ============================================================ */

// Seleciona o input e atualiza o contador dinâmico
const inputTexto = document.getElementById("input-text");
const contador = document.getElementById("contador-texto");

// Insere o contador depois do input
inputTexto.insertAdjacentElement("afterend", contador);
// Atualiza contador em tempo real
inputTexto.addEventListener("input", atualizarContador);

function atualizarContador() {
  const texto = inputTexto.value;
  const caracteres = texto.length;

  // Conta palavras ignorando espaços extras (regex)
  const palavras = texto.trim() === "" ? 0 : texto.trim().split(/\s+/).length;
  contador.textContent = `${caracteres} caracteres | ${palavras} palavras`;
}
// Inicializa o contador vazio
atualizarContador();
