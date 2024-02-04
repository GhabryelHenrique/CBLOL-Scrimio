import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  bgImage: number = 0
  formLogin : FormGroup

  constructor(private fb: FormBuilder) {
    this.formLogin = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.bgImage = this.getRandomInt()
  }

  getRandomInt(): number {
    return Math.floor(Math.random() * 22) + 1;
  }

  login(): void{
    return
  }


}
