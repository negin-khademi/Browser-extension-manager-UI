import { Injectable, signal } from "@angular/core";
import data from "../../../data.json";
import { ExtensionConfig } from "../model/extension.model";

@Injectable({
  providedIn: "root",
})
export class ExtensionService {
  extensionsList = signal<ExtensionConfig[]>(data);

  constructor() {}
}
