import {Injectable} from "@angular/core";
import {IInventoryItem} from "../shapes/IInventoryItem";
import {BackendInventoryService} from "./backendServices/backendInventoryService.service";

@Injectable()
class InventoryService {

  constructor(private backendInventoryService:BackendInventoryService) {}

  getItems():IInventoryItem[] {
    return this.backendInventoryService.getItems();
  }
}

export {
  InventoryService
}
