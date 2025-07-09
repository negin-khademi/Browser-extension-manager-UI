import { Component, EventEmitter, Input, Output, inject } from "@angular/core";

import { ButtonComponent } from "../shared/button/button.component";
import { ExtensionConfig } from "../shared/models/extension.model";
import { ExtensionService } from "../shared/services/extension.service";

@Component({
  selector: "app-card",
  imports: [ButtonComponent],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class CardComponent {
  @Input({ required: true }) card!: ExtensionConfig;
  extensionService = inject(ExtensionService);
  @Output() select = new EventEmitter();

  get imagePath() {
    return this.card.logo;
  }

  onRemoveExtension() {
    this.select.emit(this.card.name);
  }

  onToggleExtension(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.card.isActive = checked;
    this.extensionService.updateExtensionStatus(this.card.name, checked);
  }
}
