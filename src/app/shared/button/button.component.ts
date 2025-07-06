import { Component, EventEmitter, Input, Output } from "@angular/core";

import { CommonModule } from "@angular/common";

@Component({
	selector: "app-button",
	imports: [CommonModule],
	templateUrl: "./button.component.html",
	styleUrl: "./button.component.scss",
})
export class ButtonComponent {
	@Input({ required: true }) name!: string;
	@Input() active: boolean = false;
	@Output() select = new EventEmitter();

	onClick() {
		this.select.emit(this.name);
	}
}
