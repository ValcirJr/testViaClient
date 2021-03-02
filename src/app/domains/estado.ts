import { Autorizador } from "./autorizador"
import { Cidade } from "./cidade"

export class Estado{
    id : number
    nome: string
    cidades: Cidade[]
    autorizadores: Autorizador[]

}