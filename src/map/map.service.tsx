import {iPirate, iShip, itemModel} from '../modals/item';
import {seaTile, StandartGameTileCount, AdditionGameTileCount, TEAM} from "../modals/consts"

export class MapService {
    constructor() {};
    
    getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getRandomTileName(counterTile: any) {
        let keys = Object.keys(counterTile).filter( (key) => counterTile[key] != 0 );
        let index = this.getRandomInt(0, keys.length);
        counterTile[keys[index]]--;
        return keys[index];
    }

    genMap(isStandart: boolean): any[] {
        let rows = [];
        let counterTile = isStandart ? StandartGameTileCount : AdditionGameTileCount;
        let seaCounter = seaTile;


        for(let j=0; j < 13; j++) {
            // console.log(StandartGameTileCount);
            let items = [];

            for(let i=0; i < 13; i++) {
                let currentTile = new itemModel();
                currentTile.row = j;
                currentTile.index = i;

                let index = i + j * 12;
                if(j == 0 || j == 12 || i == 0 || i == 12 ||
                    index == 13 || index == 23 || index == 133 || index == 143
                ) {
                    currentTile.name = "sea";
                } else {
                    currentTile.name = this.getRandomTileName(counterTile);
                    if(currentTile.name.indexOf("coin") === 0) {
                        let count = parseInt(currentTile.name.split('-')[1]);
                        currentTile.countCoint = count;
                    }
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
                        friendColor: null,

                        pirates: [] as iPirate[],
                        countCoint: 0
                    }
                    ship.ourColor = ship.address == "6_0" ? TEAM.black :
                        ship.address == "0_6" ? TEAM.red :
                        ship.address == "12_6" ? TEAM.white : TEAM.yellow;

                    let pirate: iPirate = {
                        name: "pirate",
                        currentStep: 0,
                        friendColor: ship.friendColor,
                        ourColor: ship.ourColor
                    };
                    
                    ship.pirates.push(pirate);
                    ship.pirates.push(pirate);
                    ship.pirates.push(pirate);
                    
                    currentTile.items.push(ship);
                }

                items.push(currentTile);
            }
            rows.push(items);
        }
        // console.log(counterTile);
        return rows;
    }
}