import { Cachorro } from "./Cachorro";
import { Cavalo } from "./Cavalo";
import { Preguica } from "./Preguica";
import { IEmiteSom } from "./emitisom";

const cachorro = new Cachorro ('Venus', 2, true);
const cavalo = new Cavalo ('John' , 5, true);
const preguica = new Preguica ('Pleg', 5, true);

function som ( animal: IEmiteSom) {
animal.EmiteSom()
}

som(cachorro)
som(cavalo)
som(preguica)