import {
	Component,
	ViewEncapsulation
} from '@angular/core';

@Component({
	selector: 'app-root',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './root.component.html',
	styleUrls: ['./root.component.scss']
})
export class RootComponent {
	title = 'app';
}
