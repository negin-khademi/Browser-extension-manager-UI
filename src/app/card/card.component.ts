import { Component, EventEmitter, Input, Output } from "@angular/core";

import { ButtonComponent } from "../shared/button/button.component";

@Component({
	selector: "app-card",
	imports: [ButtonComponent],
	templateUrl: "./card.component.html",
	styleUrl: "./card.component.scss",
})
export class CardComponent {
	@Input({ required: true }) card!: {
		logo: string;
		name: string;
		description: string;
		isActive: boolean;
	};
	@Output() select = new EventEmitter();
	@Output() isChecked = new EventEmitter();

	get imagePath() {
		return this.card.logo;
	}

	onChangeToggle(event: Event) {
		console.log("event", event);

		const checked = (event.target as HTMLInputElement).checked;
		this.card.isActive = checked; // update local card status
		console.log(checked);
		// this.isChecked.emit({ name: this.card.name, isActive: checked }); // emit updated info
		// console.log("Toggle changed in card:", this.card.name, checked);
	}

	onRemoveExtension() {
		this.select.emit(this.card.name);
	}
}
