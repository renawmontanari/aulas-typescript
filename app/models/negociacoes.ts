import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  // Forma verbosa Array<Negociacao>
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
