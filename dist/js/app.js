import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { Negociacoes } from "./models/negociacoes.js";
import { NegociacoesView } from "./views/negociacoes-view.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
});
const negociacoes = new Negociacoes();
const negociacoesView = new NegociacoesView("#negociacoesView");
const template = negociacoesView.template(negociacoes);
console.log(template);
