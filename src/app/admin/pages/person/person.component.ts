import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DriverAction from 'src/app/redux/person/person.actions';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonsComponent implements OnInit {
  count : number = 0
  openModal : boolean = false
  submitForm : number = 0
  constructor(
    private store: Store<any>
  ) {

  }

  ngOnInit() {
  }
  inOpenModal(val : boolean){
    this.openModal=val
  }
  newDriver(){
    const form : any = {}
    this.store.dispatch( DriverAction.loadPersonsForm( form ) );
    this.openModal = true
    this.submitForm = 0
  }
  closeModal(){
    this.openModal = false
    this.submitForm = 0
  }

  submit(){
    this.submitForm = this.submitForm + 1
  }
}
