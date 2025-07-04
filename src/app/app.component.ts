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
	data = data;
	showList: any[] = [];
	activeList: any[] = [];
	InActiveList: any[] = [];

	ngOnInit(): void {
		this.onAllExtension();
		// this.onctiveExtensions();
		// this.onInActiveExtensions();
	}
	// show all extension
	onAllExtension() {
		this.showList = data;
	}

	// filter active extensions
	onctiveExtensions() {
		for (let obj of data) {
			if (obj.isActive === true) {
				this.activeList.push(obj);
			}
		}
		this.showList = this.activeList;
		this.activeList = [];
		console.log(this.activeList);
	}

	// filter InActive extensions
	onInActiveExtensions() {
		for (let obj of data) {
			if (obj.isActive === false) {
				this.InActiveList.push(obj);
			}
		}
		this.showList = this.InActiveList;
		this.InActiveList = [];
		console.log(this.InActiveList);
	}

	theme = signal<"light" | "dark">("light");

	onThemeToggle() {
		this.theme.set(this.theme() === "light" ? "dark" : "light");
		document.documentElement.classList.toggle("dark");
	}
}
