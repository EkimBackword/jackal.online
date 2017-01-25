import * as React from "react";

export interface IProps { }

export default class Menu extends React.Component<IProps, any> {
    render() {

        return (
            <div className="menu layout-fill flex-25">
                <h1>This is menu!</h1>
                <button  className="btn btn-primary">Start Game</button>
            </div>
        );
    }
}