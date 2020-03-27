import React from 'react';
import * as _ from 'lodash';
import styles from './ListInput.module.css';
import moment from 'moment';

export class ListInput extends React.Component {
    RadioGroup = ({ input }) => {
        let setRef = (e) => {
            this.valuesRef[input.label] = e.target;
        }
        let options = _.set(input.options || []);
        let defaultValue = input.defaultValue || options[0]
        return (
            <div>
                {
                    _.map(options, (v, i) =>

                        <label key={i} style={{ paddingRight: '10px' }}>
                            <input
                                className={styles.tableInputField}
                                type='radio'
                                value={v}
                                name={input.label}
                                onChange={setRef}
                                defaultChecked={defaultValue === v}
                                ref={ref => { if (defaultValue === v) this.valuesRef[input.label] = ref; }}
                                readOnly={input.readOnly}
                            />{v}
                        </label>
                    )
                }
            </div>
        )
    }
    Dropdown = ({ input }) => {
        let setRef = (e) => {
            this.valuesRef[input.label] = e.target;
        }
        let options = input.options || [];
        return (
            <div>
                {/* TODO */}
            </div>
        )
    }

    InputField = ({ input }) => {
        switch (input.type) {
            case 'radio': return (<this.RadioGroup input={input} />);
            case 'date':
                let dt = input.defaultValue && new moment(input.defaultValue).format("YYYY-MM-DD");
                return (<input
                    className={styles.tableInputField}
                    type={input.type || 'text'}
                    defaultValue={dt || null}
                    readOnly={input.readOnly}
                    ref={ref => this.valuesRef[input.label] = ref}
                />);
            case 'dropdown': return (<this.Dropdown input={input} ref={ref => this.valuesRef[input.label] = ref} />)
            default: return (<input
                className={styles.tableInputField}
                type={input.type || 'text'}
                defaultValue={input.defaultValue}
                readOnly={input.readOnly}
                ref={ref => this.valuesRef[input.label] = ref}
            />);
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
    getValidationResult = () => {
        let values = {};
        _.forEach(this.valuesRef, (v, k) => {
            values[k] = {
                validity: v.validity,
                validationMessage: v.validationMessage
            };
        })
        return values;
    }
    render() {
        let inputs = this.props.inputs || [];
        return (
            <table style={{ borderSpacing: '10px' }} className={styles.table}>
                <tbody ref={ref => this.tableBody = ref}>
                    {
                        inputs.map(inp =>
                            <tr key={inp.label} className={styles.trow}>
                                <td className={styles.labelCell}>{inp.label}&ensp;</td>
                                <td className={styles.valueCell}>
                                    <this.InputField input={inp} />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        )
    }
}
