import {
	Component,
	HostBinding,
	ViewEncapsulation,
	OnInit
} from '@angular/core';

@Component({
	selector: 'modal-dynamic',
	encapsulation: ViewEncapsulation.None,
	templateUrl: 'modal-dynamic.component.html',
	styleUrls: ['modal-dynamic.component.scss']
})

export class ModalDynamicComponent implements OnInit {

	@HostBinding('class') public modalDynamicClassName: String = 'ModalDynamic';

	constructor() { }

	ngOnInit() { }
}
