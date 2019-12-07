import { Component, OnInit, Inject, AfterContentInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth-services.service';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentInit {

	public rightDrawerVisiblity = false;

	constructor(
		public _authenticationService: AuthenticationService) {}

	ngOnInit() { }

	ngAfterContentInit() {
		window.scrollTo(0, 0);
	}

	openMoreDrawer(): void {
		this.rightDrawerVisiblity = true;
	}

	closeMoreDrawer(): void {
		this.rightDrawerVisiblity = false;
	}

	openModal() {
		this._authenticationService.isVisibleLogin = true;
	}

	
	handleCancel(): void {
		this._authenticationService.isVisibleLogin = false;
	}	
}
