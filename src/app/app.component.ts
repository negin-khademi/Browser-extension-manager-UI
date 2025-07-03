import { Component, effect, signal } from "@angular/core";

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

	darkMode = signal<boolean>(false);

	constructor() {
		// Load theme on startup
		const saved = localStorage.getItem("theme");
		if (saved === "dark") {
			this.darkMode.set(true);
		}
		effect(() => {
			const isDark = this.darkMode();
			const root = document.documentElement;

			if (isDark) {
				root.classList.add("dark");
				localStorage.setItem("theme", "dark");
			} else {
				root.classList.remove("dark");
				localStorage.setItem("theme", "light");
			}
		});
	}
}
