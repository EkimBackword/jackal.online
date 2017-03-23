import * as React from 'react';
import {iPirate} from '../../modals/item';

export interface IPirates {
    items: iPirate[];
} 

export class Pirates extends React.Component<IPirates, any> {
    render() {
        let pirates: any[] = [];
        this.props.items.forEach((i, index) => {
            let style = `pirates pirates--${i.ourColor} layout-column layout-align-center-center`;
            pirates.push(<div className={style} key={index}></div>)
        })
        return (
            <div className='layout-column flex-50'>
                {pirates}
            </div>
        );
    }
}