import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { APP } from './../constants';
import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { loginlogout } from '../redux/login/login.actions';
import { Store } from '@ngrx/store';

@Injectable({
	providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
	apiUrl: string = APP.ApiEndpoint;
  UrlBase: string = APP.AppBaseUrl;
	constructor(
		private _LoadingService:NgxSpinnerService,
		private toastr: ToastrService,
    private store:Store
	) {
	}
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
    let data : any = 	localStorage.getItem('dataUser');
    let token = ''
    if(data){
      token = JSON.parse(data).token
    }
		this._LoadingService.show();

		var headers = req;
		if (token) {
			headers = req.clone({
				headers: req.headers.set('Authorization', 'Bearer '+token)
			});
		}

		return next.handle(headers).pipe(
			tap((event: HttpEvent<any>) => {
				return next.handle(headers);
			}),
			catchError((error: HttpErrorResponse) => {
        console.log(error);

				if(error.status==401){
					this.toastr.error('Not authorized','server responds')
          localStorage.setItem('dataUser','')
          this.store.dispatch(loginlogout());
          window.location.replace(`${this.UrlBase}/#/login/`);
				}
        if(error.status==500){
					this.toastr.error('internal error with server ','server responds')
				}
        if(error.status==400){
					this.toastr.error(error.error.message,'server responds')
				}
				return throwError(error.error.message);
			}),
			finalize(() => {
          this._LoadingService.hide();
			})
		);
	}
}
