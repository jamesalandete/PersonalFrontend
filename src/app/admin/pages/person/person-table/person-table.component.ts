import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.state';
import { loadPersons, loadPersonsForm } from 'src/app/redux/person/person.actions';
import { selectLoadPersons } from 'src/app/redux/person/person.selectors';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonsTableComponent implements OnInit {
  listsPersons : any = []

  @Output() outOpenModal = new EventEmitter<boolean>();
  constructor(
    private store: Store<AppState>
  ) {
    this.store.select(selectLoadPersons).subscribe((data: any) => {
      if(!data.loading){
        this.listsPersons=data.list
      }
    });

  }

  ngOnInit() {
    this.listPersons()
  }
  listPersons(){
    this.store.dispatch(loadPersons());
  }
  selectItem(item : any){
    this.store.dispatch(loadPersonsForm(item));
    this.outOpenModal.emit(true)
  }

}
