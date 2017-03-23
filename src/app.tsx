import * as React from 'react';
import {createStore, Store} from 'redux';
import {Reducer, iAction, iStoreState} from './redux/reducer';
import {TEAM} from "./modals/consts";
import { MapService } from './map/map.service';

import Menu from './menu/menu';
import Map from './map/map';

export default class App extends React.Component<any, iStoreState> {
    store: Store<iStoreState>;

    constructor(props: any) {
        super(props);

        let mapper = new MapService();
        let rows = mapper.genMap(true);

        this.state = {
            activeElements: [],
            activePirate: null,
            activeShip: null,
            currentTeam: TEAM.white,
            rows: rows,
            status: 0,
        };

        this.store = createStore(Reducer, this.state);
        this.store.subscribe(() => {
            this.setState(this.store.getState() as any);
        })
    }

    render() {
        return (
            <div className="wrapper layout-fill layout-row">
                <Menu store={this.store} state={this.state}/>
                <Map store={this.store} state={this.state}/>
            </div>
        )
    }
}