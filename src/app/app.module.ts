import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormBuilder } from '@angular/forms';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DecimalPipe } from '@angular/common';
import { RoutingComponents, AppRoutingModule } from './app-routing.module';
import { ArticleService } from './services/articles.service';

import { NzLayoutModule, NzDropDownModule, NzTabsModule, NzResultModule, NzBackTopModule, NZ_I18N, en_US, fr_FR, NzModalService, NzMessageService, NzI18nService, NzBadgeModule, NZ_DATE_CONFIG,NzCardModule, NzAvatarModule,NzListModule, NzButtonModule } from 'ng-zorro-antd';


@NgModule({
	declarations: [
		AppComponent,
		RoutingComponents
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
		NzListModule,
		NzButtonModule,

		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule

	],
	providers: [
        Title,
		NzModalService,
		NzMessageService,
		FormBuilder,
        NzI18nService,
		DecimalPipe,
		ArticleService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
	var timer = new Date().getTime();
}