import { Injectable, signal } from "@angular/core";
import data from "../../../data.json";
import { ExtensionConfig } from "../model/extension.model";

@Injectable({
  providedIn: "root",
})
export class ExtensionService {
  extensionsList = signal<ExtensionConfig[]>(data);

  constructor() {}

  updateExtensionStatus(name: string, isActive: boolean) {
    const extensions = this.extensionsList();
    const index = extensions.findIndex((ext) => ext.name === name);
    if (index !== -1) {
      extensions[index].isActive = isActive;
      this.extensionsList.set(extensions);
    }
  }

  removeExtension(name: string) {
    const extensions = this.extensionsList();
    const index = extensions.findIndex((ext) => ext.name === name);
    if (index !== -1) {
      extensions.splice(index, 1);
      this.extensionsList.set(extensions);
    }
  }
}
