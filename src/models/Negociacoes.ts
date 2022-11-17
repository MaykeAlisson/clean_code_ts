import { logar } from "../decorator/log.js";
import { Negociacao } from "./Negociacao.js";

export default class Negociacoes {
    private negociacoes: Array<Negociacao> = []

    @logar
    adicionar(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    @logar
    listar(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }
}