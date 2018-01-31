import {
	Component,

	ComponentFactoryResolver,
	Injectable,
	Inject,
	ReflectiveInjector,

	ViewEncapsulation,
	ViewContainerRef,
	OnInit
} from '@angular/core';

import { ModalDynamicComponent } from '../../components/modal-dynamic/modal-dynamic.component';

@Component({
	selector: 'home-page',
	templateUrl: 'home.page.html'
})
export class HomePageComponent implements OnInit {
	constructor(@Inject(ComponentFactoryResolver) public cfr: ComponentFactoryResolver, public  vcr: ViewContainerRef) {
	}

	ngOnInit() { }

	injectComponent() {
		console.log('adding dynamic component');

		const factory = this.cfr.resolveComponentFactory(ModalDynamicComponent);
		const component = factory.create(this.vcr.parentInjector);

		this.vcr.insert(component.hostView);
	}
}
