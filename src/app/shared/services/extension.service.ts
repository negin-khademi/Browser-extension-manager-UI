import { Injectable, signal } from "@angular/core";

import { ExtensionConfig } from "../models/extension.model";
import data from "./../../../data.json";

@Injectable({
  providedIn: "root",
})
export class ExtensionService {
  extensionList = signal<ExtensionConfig[]>(data);
  constructor() {}
}
