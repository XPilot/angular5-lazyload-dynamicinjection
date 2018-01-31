import {
	Component,
	HostBinding,
	ViewEncapsulation,
	OnInit
} from '@angular/core';

@Component({
	selector: 'modal',
	encapsulation: ViewEncapsulation.None,
	templateUrl: 'modal.component.html',
	styleUrls: ['modal.component.scss']
})

export class ModalComponent implements OnInit {

	@HostBinding('class') public modalClassName: String = 'Modal';

	constructor() { }

	ngOnInit() { }
}
