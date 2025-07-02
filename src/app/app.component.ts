import { ButtonComponent } from "./shared/button/button.component";
import { CardComponent } from "./card/card.component";
import { Component } from "@angular/core";
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
}
