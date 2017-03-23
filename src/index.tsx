import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app';

ReactDOM.render(
    (
        <div className="wrapper layout-fill layout-row">
            <App />
        </div>
    )
    ,
    document.getElementById('root')
)