import * as React from "react";
import {iPirate, iShip, itemModel} from '../modals/item';
import {seaTile, StandartGameTileCount, TEAM} from "../modals/consts";
import { MapService } from './map.service';
import { MapItem } from './map-item/map-item';

export interface IProps { }

export default class Map extends React.Component<IProps, any> {
    mapService: MapService;
    rows: any[]; 

    constructor(props: IProps) {
        super(props);
        this.mapService = new MapService();
        this.generateMap();
    }

    generateMap(isOld: boolean = true) {
        this.rows = this.mapService.genStandartMap();
    }

    render() {
        return (
            <div className="map layout-fill layout-column layout-align-center-center flex-75">
                {
                    this.rows.map((i, ind) => {
                        return (
                            <div key={ind} className="layout-row">
                                {
                                    i.map((item: itemModel, index: number) => {
                                        return (
                                            <div key={index} className="layout-column layout-align-center-center map__element">
                                                <MapItem  item={item} />
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