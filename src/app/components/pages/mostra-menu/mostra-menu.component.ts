import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu.interface';
import { ImageServiceService } from 'src/app/services/image-service.service';
import { MenuServiceService } from 'src/app/services/menu.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Item } from 'src/app/interfaces/item.interface';
import { StorageService } from 'src/app/services/storage.service';
import { UtilityService } from 'src/app/services/utility.service';
import magna_const from 'src/app/constants/constants';
import { ModalService } from 'src/app/services/modale.service';
import { ModalComponent } from '../../common/modale/modale.component';

@Component({
  selector: 'app-mostra-menu',
  templateUrl: './mostra-menu.component.html',
  styleUrls: ['./mostra-menu.component.scss']
})
export class MostraMenuComponent implements OnInit {

  constructor(private menuService: MenuServiceService, private imageService: ImageServiceService, private sanitizer: DomSanitizer, private storageService: StorageService, private utility: UtilityService, private modaleService: ModalService) { }

  menu!: Menu;
  imgUrl!: any;

  ngOnInit(): void {

   /* let imgResp = this.imageService.getImg(1).then(res=>{
      debugger;

    });*/

    fetch(magna_const.service.beUrlImg +'1').then(response=>{
    var result =  this.utility.blobToBase64(response.body);
      this.imgUrl = result;
    })


    this.getMenu(2);

  }

  addToCart(item: Item) {
    this.storageService.addProductToCart(item);
    this.modaleService.showModal("Ottimo!", "Prodotto aggiunto al carrello", "type_success");
  }

  getMenu(id: number) {
    this.menuService.getMenu(id).subscribe(res => {
      this.menu = res;
    })

  }







}