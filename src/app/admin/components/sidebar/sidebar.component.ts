import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { APP } from 'src/app/constants';
import { loginlogout } from 'src/app/redux/login/login.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	UrlBase : String = APP.AppBaseUrl
  constructor(
    private store : Store
  ) { 

  }

  ngOnInit() {
  }
  logout(){
    localStorage.setItem('dataUser','') 
    this.store.dispatch(loginlogout());
    window.location.replace(`${this.UrlBase}/#/login/`);
  }
}
