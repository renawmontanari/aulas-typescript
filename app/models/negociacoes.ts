import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  // Forma verbosa Array<Negociacao>
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
