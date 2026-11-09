const botoes = document.querySelectorAll(".number, .operator");
let visor = document.querySelector(".calculator-display");
let expressao = "";

botoes.forEach(Element => {
    Element.addEventListener("click", () => {
        const valor = Element.textContent;
        console.log(valor);
        expressao += valor;
        visor.textContent = expressao
    });
});