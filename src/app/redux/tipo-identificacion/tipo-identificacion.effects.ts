import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as TipoIdentificacionAction from './tipo-identificacion.actions';
import { TipoIdentificacionService } from './../../services/tipo-identificacion.service'
import { IResponse } from 'src/app/interfaces/response.interface';
import { ITipoIdentificacion } from 'src/app/interfaces/tipo-documentos.interface';


@Injectable()
export class TipoIdentificacionEffects {
  tipoIdentificacion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TipoIdentificacionAction.loadTipoIdentificacions),
      switchMap(() =>
        this.tipoIdentificacionService.listar().pipe(
          map((list: IResponse<ITipoIdentificacion>) =>
            TipoIdentificacionAction.loadTipoIdentificacionsSuccess({ list: list.result })
          ),
          catchError(() =>
            of(TipoIdentificacionAction.loadTipoIdentificacionsError())
          )
        )
      )
    )
  );

  tipoIdentificacionFormSave$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TipoIdentificacionAction.saveTipoIdentificacionsForm),
      switchMap((data) =>
        this.tipoIdentificacionService.save(data).pipe(
          map((tipoIdentificacion: any) =>
            TipoIdentificacionAction.saveTipoIdentificacionsFormSuccess({
              tipoIdentificacion,
            })
          ),
          catchError((e) =>
            of(TipoIdentificacionAction.saveTipoIdentificacionsFormError(e))
          )
        )
      )
    )
  );

  tipoIdentificacionFormUpdate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TipoIdentificacionAction.updateTipoIdentificacionsForm),
      switchMap((data) =>
        this.tipoIdentificacionService.update(data).pipe(
          map((tipoIdentificacion: any) =>
            TipoIdentificacionAction.saveTipoIdentificacionsFormSuccess({
              tipoIdentificacion,
            })
          ),
          catchError((e) =>
            of(TipoIdentificacionAction.saveTipoIdentificacionsFormError(e))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private tipoIdentificacionService: TipoIdentificacionService
  ) {}
}
