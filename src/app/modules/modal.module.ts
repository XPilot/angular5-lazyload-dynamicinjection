import { NgModule } from '@angular/core';

import { ModalComponent } from '../components/modal/modal.component';

import { MODAL_ROUTES } from './modal.routes';

@NgModule({
	imports: [MODAL_ROUTES],
	exports: [],
	declarations: [
		ModalComponent
	],
	providers: [],
})
export class ModalModule {
}

