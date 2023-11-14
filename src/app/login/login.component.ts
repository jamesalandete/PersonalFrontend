import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as actionLogin from './../redux/login/login.actions';
import { LoginModel } from '../models/login.models';
import { APP } from './../constants'
import { Observable } from 'rxjs';
import { selectLogin } from '../redux/login/driver.selectors';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm !: FormGroup;
	UrlBase : String = APP.AppBaseUrl

  constructor(
		private store: Store<any>,
		private toastr:ToastrService
	) {

	}

  ngOnInit() {
		this.store.select(selectLogin).subscribe((data : any)=> {
			console.log(data);
			
			if(!data.auth && data.dataUser){
				// this.toastr.error("No autentications")
			}else{
				localStorage.setItem('dataUser',JSON.stringify(data.dataUser))
				this.toastr.success("Autentications success")
				window.location.replace(`${this.UrlBase}/#/admin/`);
			}
    });
    this.loginForm = new FormGroup({
			usuario: new FormControl(null, [Validators.required]),
			pass: new FormControl(null, [Validators.required, Validators.maxLength(12)])
		});
  }

  async login() {
		if (this.loginForm.valid) {
			this.store.dispatch(actionLogin.loginAuth(this.loginForm.value));
		}
	}

}
