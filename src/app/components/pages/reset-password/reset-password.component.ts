import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private utenteService: UtenteService) { }

  resetFormGroup: FormGroup = new FormGroup({
    username : new FormControl("", [Validators.required])
  })

  reset() {
    let currentForm = this.resetFormGroup;
    this.utenteService.resetPassword(currentForm.value.username).subscribe(res => {
      alert('reset avvenuto con successo, controlla la tua mail! 🥳')
    }, err => {
      if(err.status == 400) 
          alert('Il programmatore è una capra, perché ti ha permesso di inserire una stringa vuota 😡');
      
      if(err.status == 401)
          alert('hai inserito un username sbagliato. 😡');
    });

  }

  ngOnInit(): void {
  }

  
}
