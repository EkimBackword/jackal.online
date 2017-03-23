import * as React from "react";
import {iPirate, iShip, iCointes, itemModel} from '../../modals/item';

import {Ship} from './ship';
import {Pirates} from './pirates';
import {Coints} from './coints';

export interface IProps {
    item: itemModel;
    status: number;
 }

export class MapItem extends React.Component<IProps, any> {
    constructor(props:IProps) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    flip = () => {
        if(!this.state.isOpen && this.props.status == 1) {
            this.setState({isOpen: !this.state.isOpen});
        }
    }

    render() {
        let flipContainer = this.state.isOpen ? "flip-container" : "flip-container flip";
        let styleFront = { backgroundImage: `url('../img/tile/${this.props.item.name}.png')` };
        let styleBack = { backgroundImage: "url('../img/tile/back.png')" };
        let pirates: iPirate[] = this.props.item.items.filter((item: iShip | iPirate | iCointes) => item.name == "pirate");
        let pirate = pirates.length > 0 ? <Pirates items={pirates}/> : null;
        let cointsCount = this.props.item.countCoint > 0 ? <Coints name="coints" count={this.props.item.countCoint} /> : null;

        if(this.props.item.name == "sea") {
            let ships: iShip[] = this.props.item.items.filter((item: iShip | iPirate | iCointes) => item.name == "ship");
            let ship = ships.length == 1 ? <Ship item={ships[0]} /> : null;
            return (
                <div className="layout-row layout-align-center-center map__element map__element-sea">
                    {ship}
                    {pirate}
                </div>
            )
        }

        return (
            <div className={flipContainer} onClick={this.flip}>
                <div className="flipper">
                    <div className="back" style={styleBack}>
                    </div>
                    <div className="front layout-row" style={styleFront}>
                        {pirate}
                        {cointsCount}
                    </div>
                </div>
            </div>
        );
    }
}