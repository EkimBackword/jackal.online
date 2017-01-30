import * as React from "react";
import {iPirate, iShip, itemModel} from '../../modals/item';

export interface IProps {
    item: itemModel;
 }

export class MapItem extends React.Component<IProps, any> {
    constructor(props:IProps) {
        super(props);
        this.state = {
            isFlip: false,
        }
    }

    flip = () => {
        this.setState({isFlip: !this.state.isFlip});
    }

    render() {
        let flipContainer = this.state.isFlip ? "flip-container" : "flip-container flip";
        let styleFront = { backgroundImage: `url('../img/tile/${this.props.item.name}.png')` };
        let styleBack = { backgroundImage: "url('../img/tile/back.png')" };

        if(this.props.item.name == "sea") {
            let items: iShip[] = this.props.item.items.filter((item: iShip | iPirate) => item.name == "ship");
            let ship = items.length == 1 ? <div className='ship' style={{ backgroundColor: items[0].ourColor }}></div> : null;
            return (
                <div className="layout-column layout-align-center-center map__element map__element-sea">
                    {ship}
                </div>
            )
        }

        return (
            <div className={flipContainer} onClick={this.flip}>
                <div className="flipper">
                    <div className="back" style={styleBack}>
                    </div>
                    <div className="front" style={styleFront}>
                    </div>
                </div>
            </div>
        );
    }
}