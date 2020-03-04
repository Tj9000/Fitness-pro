import React from 'react';
import * as _ from 'lodash';
import styles from './ListTableView.module.css';

export class ListTableView extends React.Component {

    ViewField = ({ input }) => {
        return input.value
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let inputs = this.props.data || [];
        return (
            <table className={styles.table}>
                <tbody ref={ref => this.tableBody = ref} className={styles.tableBody}>
                    {
                        inputs.filter(inp => inp.label).map(inp =>
                            <tr key={inp.label} className={styles.trow}>
                                <td className={styles.labelCell}><span>{inp.label}&ensp;</span><span>:</span></td>
                                <td>
                                    <this.ViewField input={inp} />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        )
    }
}