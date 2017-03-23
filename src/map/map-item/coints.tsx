import * as React from 'react';
import { iCointes } from '../../modals/item';

export class Coints extends React.Component<iCointes,any> {
    render() {
        return (
            <div className="layout-row layout-align-center-center flex">
                <div className="coints flex-50">
                    {this.props.count}
                </div>
            </div>
        );
    }
}