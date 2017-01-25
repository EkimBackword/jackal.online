import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Map from './map/map';
import Menu from './menu/menu';

ReactDOM.render(
    (
        <div className="wrapper layout-fill layout-row">
            <Menu />
            <Map />
        </div>
    )
    ,
    document.getElementById('root')
)