import { Component, OnInit } from '@angular/core';
import magna_const from 'src/app/constants/constants';
import { Item } from 'src/app/interfaces/item.interface';
import { Ordine } from 'src/app/interfaces/ordine.interface';
import { ModalService } from 'src/app/services/modale.service';
import { OrdineService } from 'src/app/services/ordine.service';
import { StorageService } from 'src/app/services/storage.service';
import { UtenteService } from 'src/app/services/utente.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  ordine!: Ordine;
  totalCart: number = 0;
  carrello: Item[] = [];

  constructor(private storageService: StorageService,
    private utenteService: UtenteService,
    private utilityService: UtilityService,
    private ordineService:OrdineService,
    private modalService: ModalService) { }

  ngOnInit(): void {
    this.updateCartView();
  }

  updateCartView(){
    let productFromLocalStorage = this.storageService.getCart();
    this.carrello = productFromLocalStorage.carrello;
    this.totalCart = this.storageService.getTotalPrice();
   }

   emptyCart(e: Event){
    e.preventDefault();
     this.storageService.emptyCart();
     this.updateCartView();
     this.modalService.showModal("Ottimo!", "Carrello svuotato con successo", "type_success");

   }
   removeProductFromCart(index:number, e: Event){
     e.preventDefault();
     this.storageService.removeFromCart(index);
     this.totalCart = this.storageService.getTotalPrice();
     this.updateCartView();
   }

   setQuantita(index:number, quantita:any){
    let qt = parseInt(quantita.value);
    this.storageService.addQuantitaToProdotto(index, qt);
    this.totalCart = this.storageService.getTotalPrice();
   }

   getIdProdotti() {
     let idProdotti = [];
     let carrello = this.storageService.getCart();     
     for(let i = 0; i < this.storageService.getCart().length; i++) {
        idProdotti.push(carrello[i].id)
     }
     
     alert(idProdotti);
     return idProdotti;
   }


   aggiungiOrdine(e:Event){

    e.preventDefault();
   
    
      let ordine:Ordine = {
        // cliente: this.storageService.getUserData(),
        riferimento : this.utilityService.generateRandomString()+"",
        dataOrdine : "2022-02-07T23:13:53.681Z",
        idProdotti: this.storageService.getCartIds(),        
        idCliente : this.storageService.getUserData().id,
        tavolo: 0,
        totale:this.storageService.getTotalPrice(),
        numero_prodotti: this.storageService.getCartIds().length,
        stato: "ORDINATO",
      };

      alert(JSON.stringify(ordine));
      
      this.ordineService.creaOrdine(ordine).subscribe(res=>{
        this.modalService.showModal("Ottimo!", "Ordine creato con successo", "type_success");
      })
      
   }

}