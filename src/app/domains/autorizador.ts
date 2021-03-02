import { DisponibilidadeServicoNF } from "./disponibilidadeServicoNF"
import { Estado } from "./estado"

export class Autorizador{
    id: number
    nome: string
    estados : Estado[]
    disponibilidadeServicoNF: DisponibilidadeServicoNF[]

}