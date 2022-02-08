import { Item } from "./item.interface"
import { User } from "./user.interface"

export  interface Ordine {
    riferimento: string,
    prodotti?: number[],
    idProdotti: any[],
    dataOrdine : string,
    idCliente : number | undefined,
    tavolo:number,
    cliente?: User,
    totale : number,
    numero_prodotti : number,
    stato : string

}
