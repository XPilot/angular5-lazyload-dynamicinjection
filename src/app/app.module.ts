import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home/home.page';

// We haz to declare the dynamic modal into a public module
import { ModalDynamicComponent } from './components/modal-dynamic/modal-dynamic.component';

// App routes
import { APP_ROUTES } from './app.routes';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		ModalDynamicComponent
	],
	imports: [
		BrowserModule,
		APP_ROUTES
	],
	providers: [],
	bootstrap: [
		AppComponent
	],
	entryComponents: [
		ModalDynamicComponent
	]
})
export class AppModule {
}
