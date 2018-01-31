import {
	Routes,
	RouterModule
} from '@angular/router';

import { ModalComponent } from '../components/modal/modal.component';


const MODAL_ROUTER: Routes = [
	{
		path: '',
		component: ModalComponent
	}
];

export const MODAL_ROUTES = RouterModule.forChild(MODAL_ROUTER);
