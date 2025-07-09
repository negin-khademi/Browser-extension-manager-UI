import { Injectable, signal } from "@angular/core";

import { ExtensionConfig } from "../models/extension.model";
import data from "./../../../data.json";

@Injectable({
  providedIn: "root",
})
export class ExtensionService {
  extensionList = signal<ExtensionConfig[]>(data);
  constructor() {}

  updateExtensionStatus(name: string, isActive: boolean) {
    const extensions = this.extensionList();
    const index = extensions.findIndex((ext) => ext.name === name);
    if (index !== -1) {
      extensions[index].isActive = isActive;
      this.extensionList.set(extensions);
    }
  }
}
