import { Animal } from "./Animal";
import { IEmiteSom } from "./emitisom";
import { IsubiremArvore } from "./IsubiremArvore"

class Preguica extends Animal implements IEmiteSom, IsubiremArvore {
    public subiremarvore: boolean

    constructor(nome : string, idade: number, subiremarvore: boolean){
        super (nome, idade)
      this.subiremarvore = subiremarvore
}
    public EmiteSom () : void {
    console.log(`${this.nome} aaaw!`)
}

    public subiremArvore () : void {
    console.log(`${this.nome} posso subir em arvore!`)
    }
}
    export {Preguica}