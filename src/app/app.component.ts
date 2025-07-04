import { Component, OnInit, signal } from "@angular/core";

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
export class AppComponent implements OnInit {
	title = "Browser_extension_managerUI";
	originalData = data;
	masterList: any[] = [];
	showList: any[] = [];

	allList: any[] = [];
	activeList: any[] = [];
	InActiveList: any[] = [];

	theme = signal<"light" | "dark">("light");
	ngOnInit(): void {
		this.masterList = [...this.originalData]; // clone once
		this.showList = [...this.masterList]; // display all initially
	}
	// show all extension
	onAllExtension() {
		this.showList = [...this.masterList];
	}

	// filter active extensions
	onctiveExtensions() {
		this.showList = this.masterList.filter((item) => item.isActive === true);
	}

	// filter InActive extensions
	onInActiveExtensions() {
		this.showList = this.masterList.filter((item) => item.isActive === false);
	}

	// Delete item from master list, then re-apply current filter
	onDeleteExtension(name: string) {
		this.masterList = this.masterList.filter((item) => item.name !== name);
		this.showList = this.showList.filter((item) => item.name !== name);
	}

	// Toggles between light and dark themes.
	// Updates the reactive `theme` signal and applies/removes the `dark` class on <html> element,
	// which activates Tailwind's dark mode styles.
	onThemeToggle() {
		this.theme.set(this.theme() === "light" ? "dark" : "light");
		document.documentElement.classList.toggle("dark");
	}
}
