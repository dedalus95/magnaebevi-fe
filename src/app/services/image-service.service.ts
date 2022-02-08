import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import magna_const from '../constants/constants';
import { Item } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {


  private headers = new HttpHeaders({

    });
  constructor(private httpClient: HttpClient) { }



  // public getImg(id: number): Observable<Blob> {
  //   return this.httpClient.get<any>(magna_const.service.beUrlImg + id, {responseType : 'blob' as 'json', observe: 'response'});
  // }


  public async getImg(id:number){
   return await fetch(magna_const.service.beUrlImg + id);
  }


}
