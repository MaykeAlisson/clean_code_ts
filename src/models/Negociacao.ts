export class Negociacao {
    
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number,
        public readonly prioridade = false
    ) { }

    get data(): Date {
        return new Date(this._data.getTime());
    }

    get volume() {
        return this.valor * this.quantidade;
    }
}

