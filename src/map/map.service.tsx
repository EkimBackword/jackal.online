import {iPirate, iShip, itemModel} from '../modals/item';
import {seaTile, StandartGameTileCount, TEAM} from "../modals/consts"

export class MapService {
    constructor() {}

    getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getRandomTileName(counterTile: any) {
        let keys = Object.keys(counterTile).filter( (key) => counterTile[key] != 0 );
        let index = this.getRandomInt(0, keys.length);
        counterTile[keys[index]]--;
        return keys[index];
    }

    genStandartMap(): any[] {
        let rows = [];
        let counterTile = StandartGameTileCount;
        let seaCounter = seaTile;

        for(let j=0; j < 13; j++) {
            let items = [];

            for(let i=0; i < 13; i++) {
                let currentTile = new itemModel();
                let index = i + j * 12;
                if(j == 0 || j == 12 || i == 0 || i == 12 ||
                    index == 13 || index == 23 || index == 133 || index == 143
                ) {
                    currentTile.name = "sea";
                } else {
                    currentTile.name = this.getRandomTileName(counterTile);
                }
                if( 
                    (i == 6 && ( j == 0 || j == 12)) || 
                    (j == 6 && ( i == 0 || i == 12))
                ) {
                    let ship: iShip = {
                        name: "ship",
                        address: `${i}_${j}`,
                        canMove: true,
                        ourColor: null,
                        pirates: [] as iPirate[],
                        friendColor: null
                    }
                    ship.ourColor = ship.address == "6_0" ? TEAM.black :
                        ship.address == "0_6" ? TEAM.red :
                        ship.address == "12_6" ? TEAM.white : TEAM.yellow;
                    currentTile.items.push(ship);
                }

                items.push(currentTile);
            }
            rows.push(items);
        }
        console.log(counterTile);
        return rows;
    }

    genAdditionMap() {

    }

}