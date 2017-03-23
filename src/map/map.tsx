import * as React from "react";
import { itemModel } from '../modals/item';
import { MapItem } from './map-item/map-item';

import * as Redux from "redux";
import { iAction, iStoreState } from '../redux/reducer';
import { Actions } from '../redux/action';

export interface IProps {
    store: Redux.Store<iStoreState>,
    state: iStoreState
 }
export interface IState {}

export default class Map extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    click(item: itemModel, x: number, y: number) {
        if(item.items.length > 0 && this.props.state.status == 0) {
            let rows = this.props.state.rows;
            let action = Actions.takePirate(item, rows, x, y);
            this.props.store.dispatch(action)
        }
        if(this.props.state.status == 1) {
            let element = this.props.state.activePirate;
            let rows = this.props.state.rows;
            let action = Actions.moveElement(item, element, rows, x, y);
            this.props.store.dispatch(action);
        }
    }

    render() {
        return (
            <div className="map layout-fill layout-column layout-align-center-center flex-75">
                {
                    this.props.state.rows.map((i:any, x: number) => {
                        return (
                            <div key={x} className="layout-row">
                                {
                                    i.map((item: itemModel, y: number) => {
                                        let style = "layout-column layout-align-center-center map__element";
                                        style += item.active ? " map__element--active" : ""
                                        return (
                                            <div key={y} className={style}
                                                onClick={() => { this.click(item, x, y); }}
                                            >
                                                <MapItem item={item} status={this.props.state.status} />
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        )
                        
                    })
                }
            </div>
        );
    }
}