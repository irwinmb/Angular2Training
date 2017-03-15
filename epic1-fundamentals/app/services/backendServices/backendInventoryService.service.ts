import {Injectable} from "@angular/core";
import {IInventoryItem} from "../../shapes/IInventoryItem";

@Injectable()
export class BackendInventoryService {
  constructor() {}

  getItems():IInventoryItem[] {
    let items:IInventoryItem[] = [ {
      guid: 'item1',
      name: 'Bronze Earrings',
      price: 100.00
    },{
      guid: 'item49',
      name: 'Silver Cufflinks',
      price: 55.00
    },{
      guid: 'item74',
      name: 'Blue Tie',
      price: 121.00
    }
    ];

    return items;
  }

}
