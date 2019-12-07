import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, NavigationCancel, NavigationError, ActivatedRoute } from '@angular/router';
import { fr_FR, en_US, es_ES, NzI18nService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from './services/auth-services.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	public langsObj: any;
	public isSpinning = true;

	constructor(
		private translate: TranslateService,
		private router: Router,
		private _loader: NgxSpinnerService,
	) {

		this._loader.show();


	}

	

}
