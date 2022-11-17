export class Negociacao {
    constructor(_data, quantidade, valor, prioridade = false) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
        this.prioridade = prioridade;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get volume() {
        return this.valor * this.quantidade;
    }
}
