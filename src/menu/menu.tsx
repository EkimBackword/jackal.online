import * as React from "react";
import * as Redux from "redux";
import { iAction, iStoreState } from '../redux/reducer';
import { Actions } from '../redux/action';

export interface IProps {
    store: Redux.Store<iStoreState>;
    state: iStoreState;
 }

export default class Menu extends React.Component<IProps, any> {
    constructor(props:IProps) {
        super(props);
    }

    genNewMap() {
        this.props.store.dispatch({
            type: "genMap",
            data: null
        })
    }

    render() {
        let status = this.props.state.status == 0 ? "Выибирает кем делать ход." : "Выбирает куда идти.";
        let teamColor = `menu__team menu__team-${this.props.state.currentTeam}`;
        return (
            <div className="menu layout-column layout-align-center layout-fill flex-25">
                <div className='menu__status layout-column layout-align-center-center'>
                    <h1 className='text-0'>Ход:</h1>
                    <div className="layout-row layout-align-space-between-center layout-fill flex">
                        <p className="text-1">
                            Команда: 
                        </p>
                        <p className={teamColor}>
                            {this.props.state.currentTeam}
                        </p>
                    </div>
                    <div className="layout-row layout-align-space-between-center layout-fill flex">
                        <p className="text-1">
                            Статус: 
                        </p>
                        <p className="text-2">
                            {status}
                        </p>
                    </div>
                </div>

                <button  className="button" onClick={() => alert("+")}>
                    НОВАЯ КАРТА 1
                </button>
                <button  className="button button-gray" onClick={() => alert("+")}>
                    НОВАЯ КАРТА 2
                </button>
                <button  className="button button-white" onClick={() => alert("+")}>
                    НОВАЯ КАРТА 3
                </button>
                <button  className="button button-yellow" onClick={() => alert("+")}>
                    НОВАЯ КАРТА 3
                </button>
            </div>
        );
    }
}