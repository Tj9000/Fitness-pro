import React from 'react';
import * as _ from 'lodash';

export class ListInput extends React.Component {
    constructor(props) {
        super(props);
        this.tableBody = null
        this.state = {
        };
        this.valuesRef = {};
    }
    getValues = () => {
        let values = {};
        _.forEach(this.valuesRef, (v, k) => {
            values[k] = v.value;
        })
        return values;

    }
    render() {
        let inputs = this.props.inputs || [];
        return (
            <table><tbody ref={ref => this.tableBody = ref}>
                {
                    inputs.map(inp =>
                        <tr style={{ margin: '3px', padding: '3px' }}>
                            <td>{inp.label}</td>
                            <td>
                                <input
                                    type={inp.type || 'text'}
                                    defaultValue={inp.defaultValue}
                                    ref={ref => this.valuesRef[inp.label] = ref}
                                />
                            </td>
                        </tr>
                    )
                }
            </tbody> </table>
        )
    }
}