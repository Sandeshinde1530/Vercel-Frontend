import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone : false

})

export class LoginComponent implements OnInit 
{
  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private _http:HttpClient, private _router:Router , private service : ApiService ) { }

  ngOnInit(): void 
  {
    this.loginForm = this.formbuilder.group({
      email: ['' , Validators.required],
      password: ['' , Validators.required]
    });
  }

  logIn() 
  {
    console.log(this.loginForm.value);
    this.service.CheckUser(this.loginForm.value).subscribe((res : any) =>{
      console.log(res);
      if(res.success == true )
      {
        alert(res.message);
        this._router.navigate(['/restaurent']);
        this.loginForm.reset();    
      }
      else
      {
        alert(res.message);
        this.loginForm.reset();    
      }
      
    })
    
  }
}
