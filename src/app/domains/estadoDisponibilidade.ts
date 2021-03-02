import { Autorizador } from "./autorizador";
import { DisponibilidadeServicoNF } from "./disponibilidadeServicoNF";
import { Estado } from "./estado";

export class EstadoDisponibilidade{
    estado: Estado
    autorizador: Autorizador
    disponibilidade: DisponibilidadeServicoNF
}