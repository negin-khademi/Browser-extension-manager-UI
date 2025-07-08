import { Component, OnInit, effect, inject, signal } from "@angular/core";

import { ButtonComponent } from "./shared/button/button.component";
import { CardComponent } from "./card/card.component";
import { CommonModule } from "@angular/common";
import { ExtensionConfig } from "./shared/models/extension.model";
import { ExtensionService } from "./shared/services/extension.service";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, CardComponent, ButtonComponent, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "Browser_extension_managerUI";
  extensionList!: ExtensionConfig[];
  extensionService = inject(ExtensionService);
  selectedStatus: "all" | "active" | "inactive" = "all";

  theme = signal<"light" | "dark">("light");
  ngOnInit(): void {}

  constructor() {
    effect(() => {
      this.extensionList = this.extensionService.extensionList();
    });
  }
  // show all extension
  onAllExtension() {
    this.selectedStatus = "all";
  }

  // filter active extensions
  onctiveExtensions() {
    this.selectedStatus = "active";
  }

  // filter InActive extensions
  onInActiveExtensions() {
    this.selectedStatus = "inactive";
  }

  // Delete item from master list, then re-apply current filter
  onDeleteExtension(name: string) {
    this.extensionList = this.extensionList.filter((item) => item.name !== name);
  }

  // Toggles between light and dark themes.
  // Updates the reactive `theme` signal and applies/removes the `dark` class on <html> element,
  // which activates Tailwind's dark mode styles.
  onThemeToggle() {
    this.theme.set(this.theme() === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  }
}
