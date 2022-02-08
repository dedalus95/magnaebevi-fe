import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  public generateRandomString(){
    return Math.random().toString(36).slice(-8);
  }

   public async blobToBase64(blob: any) {

    const reader = blob.getReader();
    reader.read().then((res:any)=>{
      
      return res;
    });
    // return new Promise(resolve => {
    //   reader.onloadend = () => {
    //     debugger;
    //     resolve(reader.result);
    //   };
    // });
  }


}
