const botoes = document.querySelectorAll(".number, .operator");
let visor = document.querySelector(".calculator-display");
let expressao = "";
const clear = document.querySelector(".clear");

botoes.forEach(Element => {
    Element.addEventListener("click", () => {
        const valor = Element.textContent;
        console.log(valor);
        expressao += valor;
        visor.textContent = expressao
    });
});

clear.addEventListener("click", () => {
    expressao = "";
    visor.textContent = expressao;
    console.log("clear")
});