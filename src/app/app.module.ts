import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, DecimalPipe } from '@angular/common';
import en from '@angular/common/locales/en';
import es from '@angular/common/locales/es';
import fr from '@angular/common/locales/fr';
import { RoutingComponents, AppRoutingModule } from './app-routing.module';

//plugins
import { SlickCarouselModule } from 'ngx-slick-carousel';

//------components

import { HeaderComponent } from './components/header/header.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/header/login/login.component';
//----------
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BsModalService } from 'ngx-bootstrap';

//------services-----
import { AuthenticationService } from './services/auth-services.service';
import { PeoplesService } from './services/peoples.service';

import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner'
import { NzLayoutModule, NzDropDownModule, NzTabsModule, NzResultModule, NzBackTopModule, NZ_I18N, en_US, fr_FR, NzModalService, NzMessageService, NzI18nService, NzBadgeModule, NZ_DATE_CONFIG,NzCardModule, NzAvatarModule, NzModalModule, NzDividerModule, NzInputModule, NzButtonModule, NzIconModule, NzRateModule, NzDrawerModule } from 'ng-zorro-antd';


registerLocaleData(en);
registerLocaleData(es);
registerLocaleData(fr);


@NgModule({
	declarations: [
		AppComponent,
		RoutingComponents, 
		HeaderComponent,
		PeoplesComponent,
		FooterComponent,
		LoginComponent,
		PeopleDetailsComponent
	],
	imports: [
		// Improt of NG-ZORRO Modules :
		NzLayoutModule,
		NzDropDownModule,
		NzTabsModule,
		NzResultModule,
		NzBackTopModule,
		NzBadgeModule,
		NzCardModule,
		NzAvatarModule,
		NzModalModule,
		NzDividerModule,
		NzInputModule,
		NzButtonModule,
		NzIconModule,
		NzRateModule,
		NzDrawerModule,
		
		NgxSpinnerModule,
		HttpClientModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		SlickCarouselModule
	],
	providers: [

        Title,
		TranslateService,
		NgxSpinnerService,
		NzModalService,
		NzMessageService,
		FormBuilder,
		BsModalService,
        NzI18nService,
		DecimalPipe,
		
		//Services
		AuthenticationService,
		PeoplesService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
	var timer = new Date().getTime();
	return new TranslateHttpLoader(httpClient, "assets/i18n/", ".json?x=" + timer);
}