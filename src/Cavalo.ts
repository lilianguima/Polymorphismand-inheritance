import { Animal } from "./Animal";
import { IEmiteSom } from "./emitisom";
import { IdeveCorrer} from "./devecorrer";

class Cavalo extends Animal implements IEmiteSom, IdeveCorrer {
    public deveCorrer: boolean

    constructor( nome : string, idade: number, deveCorrer: boolean){
        super (nome, idade)
        this.deveCorrer = deveCorrer
}
    public EmiteSom () : void {
    console.log(`${this.nome} Hiin in in!`)
}

    public Correr(): void {
    console.log(`${this.nome} posso correr!`)
    }
}

export {Cavalo}