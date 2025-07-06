import { Component, EventEmitter, inject, Input, Output } from "@angular/core";

import { ButtonComponent } from "../shared/button/button.component";
import { ExtensionConfig } from "../shared/model/extension.model";
import { ExtensionService } from "../shared/services/extension.service";

@Component({
  selector: "app-card",
  imports: [ButtonComponent],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class CardComponent {
  @Input({ required: true }) card!: ExtensionConfig;

  extensionsService = inject(ExtensionService);

  get imagePath() {
    return this.card.logo;
  }

  onToggleExtension(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.card.isActive = checked; // update local card status
    this.extensionsService.updateExtensionStatus(this.card.name, checked);
  }
}
