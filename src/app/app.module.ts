import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root/root.component';

import { HomePageComponent } from './pages/home/home.page';

// We haz to declare the dynamic modal into a public module
import { ModalDynamicComponent } from './components/modal-dynamic/modal-dynamic.component';

// App routes
import { APP_ROUTES } from './app.routes';

@NgModule({
	declarations: [
		RootComponent,
		HomePageComponent,
		ModalDynamicComponent
	],
	imports: [
		BrowserModule,
		APP_ROUTES
	],
	providers: [],
	bootstrap: [
		RootComponent
	],
	entryComponents: [
		ModalDynamicComponent
	]
})
export class AppModule {
}
