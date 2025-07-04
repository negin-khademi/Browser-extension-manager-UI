import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-button",
	imports: [],
	templateUrl: "./button.component.html",
	styleUrl: "./button.component.scss",
})
export class ButtonComponent {
	@Input({ required: true }) name!: string;
	@Output() select = new EventEmitter();

	onClick() {
		this.select.emit();
		console.log("hello from component button");
	}
}
