import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as PersonAction from './person.actions';
import { PersonsService } from './../../services/person.service'
import { IResponse } from 'src/app/interfaces/response.interface';
import { IPersonas } from 'src/app/interfaces/personas.interface';


@Injectable()
export class PersonEffects {
  person$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonAction.loadPersons),
      switchMap(() =>
        this.personsService.listar().pipe(
          map((list: IResponse<IPersonas>) =>
            PersonAction.loadPersonsSuccess({ list: list.result })
          ),
          catchError(() => of(PersonAction.loadPersonsError()))
        )
      )
    )
  );

  personFormSave$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonAction.savePersonsForm),
      switchMap((data) =>
        this.personsService.save(data).pipe(
          map((person: IResponse<IPersonas>) =>
            PersonAction.savePersonsFormSuccess({ person: person.result[0] })
          ),
          catchError((e) => of(PersonAction.savePersonsFormError(e)))
        )
      )
    )
  );

  personFormUpdate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PersonAction.updatePersonsForm),
      switchMap((data) =>
        this.personsService.update(data).pipe(
          map((person: IResponse<IPersonas>) =>
            PersonAction.savePersonsFormSuccess({ person: person.result[0] })
          ),
          catchError((e) => of(PersonAction.savePersonsFormError(e)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private personsService: PersonsService
  ) {}
}
