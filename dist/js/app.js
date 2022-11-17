import { Motive } from "./models/Motive.js";
import { Negociacao } from "./models/Negociacao.js";
import Negociacoes from "./models/Negociacoes.js";

const n1 = criarNegociacao(new Date(2022, 10, 24), 12, 10.45, true);
const n2 = criarNegociacao(new Date(2022, 11, 4), 9, 100.45);
const n3 = criarNegociacao(new Date(2022, 11, 8), 15, 8.45);
const negociacoes = new Negociacoes();
negociacoes.adicionar(n1);
negociacoes.adicionar(n2);
negociacoes.adicionar(n3);
const lista = negociacoes.listar();
console.log(lista);

function criarNegociacao(data, qtd, valor, prioridade) {
    if (prioridade) {
        return new Negociacao(data, qtd, valor, prioridade);
    }
    return new Negociacao(data, qtd, valor);
}
function apiRest() {
    const url = 'https://api.adviceslip.com/advice';
    axios(url)
        .then((res) => res.json())
        .then((dado) => {
        return new Motive(dado.slip.id, dado.slip.advice);
    }).then((motive) => {
        console.log(motive);
    });
}
