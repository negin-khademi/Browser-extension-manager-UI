import { Component, OnInit, signal } from "@angular/core";

import { ButtonComponent } from "./shared/button/button.component";
import { CardComponent } from "./card/card.component";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import data from "../data.json";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, CardComponent, ButtonComponent, CommonModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
	title = "Browser_extension_managerUI";
	data = data;
	showList: any[] = [];
	activeList: any[] = [];
	InActiveList: any[] = [];
	selectedStatus: "all" | "active" | "inactive" = "all";

	ngOnInit(): void {
		this.onAllExtension();
		// this.onctiveExtensions();
		// this.onInActiveExtensions();
	}
	// show all extension
	onAllExtension() {
		this.showList = data;
		this.selectedStatus = "all";
	}

	// filter active extensions
	onctiveExtensions() {
		this.selectedStatus = "active";
		for (let obj of data) {
			if (obj.isActive === true) {
				this.activeList.push(obj);
			}
		}
		this.showList = this.activeList;
		this.activeList = [];
	}

	// filter InActive extensions
	onInActiveExtensions() {
		this.selectedStatus = "inactive";
		for (let obj of data) {
			if (obj.isActive === false) {
				this.InActiveList.push(obj);
			}
		}
		this.showList = this.InActiveList;
		this.InActiveList = [];
	}

	theme = signal<"light" | "dark">("light");

	onThemeToggle() {
		this.theme.set(this.theme() === "light" ? "dark" : "light");
		document.documentElement.classList.toggle("dark");
	}
}
