
export class itemModel {
    constructor() {}

    actionWhenOpened: Function;
    actionEverytime: Function;

    items: any[];

    countMoney: number;
}

export interface iPirate {
    ourColor: string;
    friendColor: string;
    ourShip: iShip;
    friendShip: iShip;
}

export interface iShip {
    address: number;
    ourColor: string;
    friendColor: string;
}