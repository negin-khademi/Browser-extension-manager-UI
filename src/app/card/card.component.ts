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

	get imagePath() {
		return this.card.logo;
	}

	onRemoveExtension() {
		this.select.emit(this.card.name);
	}
}
