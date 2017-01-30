export class itemModel {
    constructor() {
        this.items = [];
    }

    name: string;
    items: any[];

    tileType: string;

    actionWhenOpened: Function;
    actionEverytime: Function;

    countMoney: number;
    currentStep: number;
    countOfStep: number;

    isHorse: boolean;
    isOpened: boolean; 
    isBlocked: boolean;
    mayByAttack: boolean;

    arrow: string[];

}

export interface iPirate {
    name: string;
    
    ourColor: string;
    friendColor: string;
    ourShip: iShip;
    friendShip: iShip;
}

export interface iShip {
    name: string;

    pirates: iPirate[];
    canMove: boolean;

    address: string;
    ourColor: string;
    friendColor: string;
}