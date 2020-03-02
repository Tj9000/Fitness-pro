import React from 'react';
import * as _ from 'lodash';

export class ListInput extends React.Component {
    RadioGroup = ({ input }) => {
        let setRef = (e) => {
            this.valuesRef[input.label] = e.target;
        }
        let options = input.options || [];
        return (
            <div>
                {
                    _.map(options, (v, i) =>

                        <label key={i} style={{ paddingRight: '10px' }}>
                            <input type='radio' value={v} name={input.label} onChange={setRef} />{v}
                        </label>
                    )
                }
            </div>
        )
    }

    InputField = ({ input }) => {
        switch (input.type) {
            case 'radio': return (<this.RadioGroup input={input} ref={ref => this.valuesRef[input.label] = ref} />)
            default: return (<input
                type={input.type || 'text'}
                defaultValue={input.defaultValue}
                ref={ref => this.valuesRef[input.label] = ref}
            />)
        }
    }

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
            <table style={{ borderSpacing: '10px' }}><tbody ref={ref => this.tableBody = ref}>
                {
                    inputs.map(inp =>
                        <tr key={inp.label}>
                            <td>{inp.label}</td>
                            <td>
                                <this.InputField input={inp} />
                            </td>
                        </tr>
                    )
                }
            </tbody> </table>
        )
    }
}
