import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home/home.page';

export const router: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		component: HomePageComponent,
		children: [
			{
				path: 'open-modal',
				loadChildren: './modules/modal.module#ModalModule',
			}
		]
	},
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(router);
