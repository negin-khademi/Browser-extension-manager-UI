import { Component, Input } from "@angular/core";

@Component({
	selector: "app-card",
	imports: [],
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

	get imagePath() {
		return this.card.logo;
	}
}
