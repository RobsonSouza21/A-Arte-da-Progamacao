const botoes = document.querySelectorAll(".number, .operator, .zero");
let visor = document.querySelector(".calculator-display");
let expressao = "";
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
const igual = document.querySelector(".result");

botoes.forEach(Element => {
    Element.addEventListener("click", () => {
        const valor = Element.textContent;
        console.log(valor);
        expressao += valor;
        visor.textContent = expressao;
        visor.scrollLeft = visor.scrollWidth
    });
});

clear.addEventListener("click", () => {
    expressao = "";
    visor.textContent = expressao;
    console.log("clear")
});

backspace.addEventListener("click", () => {
    expressao = expressao.slice(0, -1);
    visor.textContent = expressao;
    console.log("backspace")
});

igual.addEventListener("click", () => {
    let resultado = eval(expressao);
    visor.textContent = resultado;
    expressao = "";
    console.log(resultado)
});