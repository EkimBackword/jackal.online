import * as React from 'react';
import {iPirate, iShip, itemModel} from '../../modals/item';
import {Pirates} from './pirates';
import {Coints} from './coints';

export interface IShip {
    item: iShip;
}

export class Ship extends React.Component<IShip, any> {
    render() {
        let count = this.props.item.pirates.length;
        let pirates = count > 0 ?  <Pirates items={this.props.item.pirates}/>: null;
        count = this.props.item.countCoint;
        let coints = count > 0 ?  <Coints name="coints" count={count}/>: null;
        return (
            <div className='ship layout-row' 
                style={{
                    border: "2px solid " + this.props.item.ourColor
                }}>
                {pirates}
                {coints}
            </div>
        )
    }
}