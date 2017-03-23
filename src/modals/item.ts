export class itemModel {
    constructor() {
        this.items = [];
        this.active = false;
    }

    row: number;
    index: number;

    name: string;
    items: any[];

    tileType: string;

    actionWhenOpened: Function;
    actionEverytime: Function;

    countCoint: number;
    countOfStep: number;

    isHorse: boolean;
    isOpened: boolean; 
    isBlocked: boolean;
    mayByAttack: boolean;

    arrow: string[];

    active: boolean;
}

export interface iPirate {
    name: string;
    
    ourColor: string;
    friendColor: string;
    currentStep: number;
}

export interface iShip {
    name: string;

    pirates: iPirate[];
    countCoint: number;

    canMove: boolean;
    
    address: string;
    
    ourColor: string;
    friendColor: string;
}

export interface iCointes {
    name: string;
    count: number;  
}