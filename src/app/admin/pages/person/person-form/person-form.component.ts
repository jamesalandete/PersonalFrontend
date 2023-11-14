import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectLoadPersons } from 'src/app/redux/person/person.selectors';
import * as VehicleAction from './../../../../redux/person/person.actions'
import * as TipoIdentificacionAction from './../../../../redux/tipo-identificacion/tipo-identificacion.actions';
import { selectLoadTipoIdentificacions } from 'src/app/redux/tipo-identificacion/tipo-identificacion.selectors';
import { ITipoIdentificacion } from 'src/app/interfaces/tipo-documentos.interface';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonsFormComponent implements OnInit {
  personForm!: FormGroup;
  listTipoIdentificacion: ITipoIdentificacion[] = []
  @Input() set submitForm(val: number) {
    if (val != 0) {
      this.saveForm();
    }
  }
  @Output() outOpenModal = new EventEmitter<boolean>();

  constructor(private store: Store<any>) {
    this.personForm = new FormGroup({
      id: new FormControl(0),
      nombres: new FormControl(null, [Validators.required]),
      apellidos: new FormControl(null, [Validators.required]),
      tipoIdentificacionId: new FormControl(null, [Validators.required]),
      numeroIdentificacion: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      activo: new FormControl(true),
    });
  }

  ngOnInit() {
    this.store.select(selectLoadPersons).subscribe((data: any) => {
      if (data.form) {
        this.personForm.reset();
        this.personForm.patchValue(data.form);
      }
      if (data.save) {
        this.outOpenModal.emit(false);
        this.store.dispatch(VehicleAction.loadPersons());
      }
    });

    this.store.select(selectLoadTipoIdentificacions).subscribe((data: any) => {
      if (!data.loading) {
        this.listTipoIdentificacion = data.list;
      }
    });

    this.store.dispatch(TipoIdentificacionAction.loadTipoIdentificacions());
  }

  saveForm() {
    if (this.personForm.valid) {
      if (
        this.personForm.value.id != 0 &&
        this.personForm.value.id != null &&
        this.personForm.value.id != undefined
      ) {
        this.store.dispatch(
          VehicleAction.updatePersonsForm(this.personForm.value)
        );
      } else {
        let data = this.personForm.value;
        data.id = 0;
        data.activo = true
        this.store.dispatch(VehicleAction.savePersonsForm(data));
      }
    }
  }
}
