import { Component, signal } from "@angular/core";

import { ButtonComponent } from "./shared/button/button.component";
import { CardComponent } from "./card/card.component";
import { RouterOutlet } from "@angular/router";
import data from "../data.json";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, CardComponent, ButtonComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "Browser_extension_managerUI";
	data = data;

	theme = signal<"light" | "dark">("light");

	onThemeToggle() {
		this.theme.set(this.theme() === "light" ? "dark" : "light");
		document.documentElement.classList.toggle("dark");
	}
}
