import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-cambia-password',
  templateUrl: './cambia-password.component.html',
  styleUrls: ['./cambia-password.component.scss']
})
export class CambiaPasswordComponent implements OnInit {

  constructor(private utenteService: UtenteService) { }

  cambiaFormGroup: FormGroup = new FormGroup({
    username : new FormControl("", [Validators.required]),
    vecchiaPassword : new FormControl("", [Validators.required]),
    nuovaPassword : new FormControl("", [Validators.required]),
    convalidaNuovaPassword: new FormControl("", [Validators.required])
  })

  ngOnInit(): void {
  }

  cambia() {
    let currentForm = this.cambiaFormGroup;

    if(currentForm.value.nuovaPassword != currentForm.value.convalidaNuovaPassword)
    {
        alert("la password inserita deve essere identica nei campi di inserimento e nel campo di convalida. ");
        currentForm.reset();
        return;
    }

    this.utenteService.cambiaPassword(currentForm.value.username, currentForm.value.vecchiaPassword, currentForm.value.nuovaPassword).subscribe(res => {
      alert('cambio avvenuto con successo! 🥳');
    }, err => {
      if(err.status == 400) 
        alert('Il programmatore è una capra, perché ti ha permesso di inserire una stringa vuota 😡');
  
      if(err.status == 401)
        alert('hai inserito una username e/o una password non corretta/e. 😡');


    })
  }

}
