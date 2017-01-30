import * as React from "react";

export interface IProps { }

export default class Menu extends React.Component<IProps, any> {
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
        let flipContainer = this.state.isFlip ? "flip-container hover" : "flip-container";
        return (
            <div className="menu layout-fill flex-25">
                <h1>This is menu!</h1>
                <button  className="btn btn-primary" onClick={this.flip}>Flip</button>
                <div className={flipContainer}>
                    <div className="flipper">
                        <div className="front">
                        </div>
                        <div className="back">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}