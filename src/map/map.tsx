import * as React from "react";

export interface IProps { }

export default class Map extends React.Component<IProps, any> {
    render() {
        let rows = [];

        for(let j=0; j < 13; j++) {
            let column = [];
            for(let i=0; i < 13; i++) {
                let sea = 'layout-column layout-align-center-center map__element';
                let index = i + j * 12;
                if(j == 0 || j == 12 || i == 0 || i == 12 ||
                    index == 13 || index == 23 || index == 133 || index == 143
                ) {
                    sea += " map__element-sea";
                } else {
                    sea += " map__element-land";
                }
                let ship;
                if( 
                    (i == 6 && ( j == 0 || j == 12)) || 
                    (j == 6 && ( i == 0 || i == 12))
                ) {
                    ship = <div className="ship"></div>;
                }

                column.push(
                    <div className={sea} key={index}>
                        {ship}
                    </div>
                )
            }
            rows.push(column);
        }

        return (
            <div className="map layout-fill layout-column layout-align-center-center flex-75">
                {
                    rows.map((i) => {
                        return (
                            <div className="layout-row">
                                {
                                    i.map((item) => {
                                        return item;
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