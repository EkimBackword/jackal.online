import { iAction, iStoreState } from './reducer';
import {iPirate, iShip, itemModel} from '../modals/item';
import {TEAM} from "../modals/consts";

export class Actions {
    static takePirate(item: itemModel, rows: any[],  x: number, y: number):iAction {
        let pirate;
        if(item.items[0].name == "ship" && item.items[0].pirates.length > 0) {
            pirate = item.items[0].pirates.pop();
            rows[x][y] = item;

            let data =  {
                rows: rows,
                pirate: pirate
            };
            return {
                type: "takePirate",
                data
            }
        }
        pirate = item.items.pop();
        rows[x][y] = item;

        let data = {
            rows: rows,
            pirate: pirate
        };
        return {
            type: "takePirate",
            data
        };
    }
    
    static moveElement(item: itemModel, element: any, rows: any[],  x: number, y: number):iAction {
        item.items.push(element);
        rows[x][y] = item;

        return {
            type: "moveElement",
            data: {
                rows: rows,
            }
        };
    }
}