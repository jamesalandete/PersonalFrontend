import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
	Router,
	ActivatedRoute,
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot
} from '@angular/router';
// eslint-disable-next-line no-restricted-imports
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class VerifyRoutingService implements CanActivate {

	constructor(
		private router: Router,
		private _ToastrService: ToastrService,
		private titleService: Title
	) {

	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		let usuario: any = 	localStorage.getItem('dataUser');
		if(usuario){
			let data = JSON.parse(usuario)
			if(data.token){
				return true
			}
		}
		return false
	}
}
