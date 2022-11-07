import { Negociacao } from "./models/Negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 18.45);

console.log(negociacao.volume)
