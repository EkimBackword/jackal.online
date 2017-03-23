import {iCointes, iPirate, iShip, itemModel} from '../modals/item';
import {TEAM} from "../modals/consts";
import { MapService } from '../map/map.service';


export interface iStoreState {
    rows:  any[];

    status: number;
    currentTeam?: string;

    activeShip: iShip;
    activePirate: iPirate;
    activeElements: itemModel[];
};

export interface iAction {
    type: string;
    data: any;
}

let nextTeam = (team: string):string => {
    switch (team) {
        case TEAM.black: return TEAM.white;
        case TEAM.white: return TEAM.yellow;
        case TEAM.yellow: return TEAM.red;
        case TEAM.red: return TEAM.black;
    }
}

export function Reducer(state: iStoreState, action: iAction): iStoreState {
    switch (action.type) {
        case "genMap": 
            let mapper = new MapService();
            let rows = mapper.genMap(true);
            return {
                activeElements: [],
                activePirate: null,
                activeShip: null,
                currentTeam: TEAM.white,
                rows: rows,
                status: 0
            };

        case "moveElement": 
            return {
                status: 0,
                activePirate: null,
                activeShip: null,

                currentTeam: nextTeam(state.currentTeam),
                rows: action.data.rows,
                activeElements: [], // action.data.elements
            };
        
        case "takePirate": 
            return {
                activeShip: state.activeShip,
                currentTeam: state.currentTeam,

                status: 1,
                activePirate: action.data.pirate,
                rows: action.data.rows,
                activeElements: []
            }
        
        case "takeShip": 
            return {
                activePirate: state.activePirate,
                currentTeam: state.currentTeam,

                status: 1,
                activeShip: action.data.ship,
                rows: action.data.rows,
                activeElements: []
            }

        default: return state;
    }
}