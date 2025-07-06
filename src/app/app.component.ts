import { Component, effect, inject, OnInit, signal } from "@angular/core";

import { ButtonComponent } from "./shared/button/button.component";
import { CardComponent } from "./card/card.component";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { ExtensionService } from "./shared/services/extension.service";
import { ExtensionConfig } from "./shared/model/extension.model";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, CardComponent, ButtonComponent, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "Browser_extension_managerUI";

  selectedStatus: "all" | "active" | "inactive" = "all";
  extensionsList!: ExtensionConfig[];

  theme = signal<"light" | "dark">("light");

  extenstionsService = inject(ExtensionService);

  constructor() {
    effect(() => {
      this.extensionsList = this.extenstionsService.extensionsList();
    });
  }

  ngOnInit(): void {}

  // show all extension
  onAllExtension() {
    this.selectedStatus = "all";
  }

  // filter active extensions
  onActiveExtensions() {
    this.selectedStatus = "active";
  }

  // filter InActive extensions
  onInActiveExtensions() {
    this.selectedStatus = "inactive";
  }

  // Delete item from master list, then re-apply current filter
  onDeleteExtension(name: string) {
    this.extensionsList = this.extensionsList.filter((item) => item.name !== name);
  }

  // Toggles between light and dark themes.
  // Updates the reactive `theme` signal and applies/removes the `dark` class on <html> element,
  // which activates Tailwind's dark mode styles.
  onThemeToggle() {
    this.theme.set(this.theme() === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  }
}
