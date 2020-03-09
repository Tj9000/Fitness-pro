import React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';
import styles from './ListTableView.module.css';

export class ListTableView extends React.Component {

    ViewField = ({ input }) => {
        switch (input.type) {
            case 'date':
                let dt = input.value && new moment(input.value);
                return <span>{dt && dt.format("DD MMM YYYY")}</span>
            case 'text':
            default:
                return <span>{input.value}</span>
        }
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
                                <td className={styles.valueCell}>
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