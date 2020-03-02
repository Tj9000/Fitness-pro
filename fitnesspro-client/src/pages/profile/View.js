import React, { Component } from "react";

import FitProfilePic from '../../assets/images/fitProfilePic.png';
import * as _ from "lodash";


class View extends Component {

    displayProfileUpdatePage = () => {
    }
    data = [
        { label: 'Name', value: 'MyName' },
        { label: 'Age', value: '24' },
        { label: 'Gender', value: 'Female' },
        { label: 'Height', value: '160' },
        { label: 'Weight', value: '56' },
        { label: 'Email', value: 'myname@gmail.com' },
        { label: 'Phone', value: '9876543210' },
        { label: 'City', value: 'Mysore' },
        { label: 'ZipCode', value: '570008' },
        { label: 'GymAccess', value: 'NA' },
        { label: 'Target', value: 'NA' },
        { label: 'LanguagePref', value: 'Eng' }
    ];
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center', padding: '20px', height: '100%' }}>
                <div style={{ display: 'flex', flex: 3, flexDirection: 'row' }} >
                    <div style={{ display: 'flex', flex: 3, flexDirection: 'column' }}>
                        <table style={{ borderSpacing: '10px' }}>
                            <tbody>
                                {
                                    _.map(this.data, (v, i) =>
                                        <tr>
                                            <td>{v.label}</td>
                                            <td>{v.value}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    <div style={{ display: 'flex', flex: 1, alignSelf: 'flex-start', flexDirection: 'column', alignContent: 'right', paddingLeft: '20px' }}>
                        <div>
                            <div style={{ display: 'flex', flex: 10, alignSelf: 'flex-start', marginBottom: '120px' }}>
                                <img style={{ marginTop: '10px' }} src={FitProfilePic}></img>
                            </div>
                            <div style={{ display: 'flex', flex: 1, alignSelf: 'flex-start', flexDirection: 'row' }}>
                                <div style={{ flexGrow: 1 }} />
                                <button onClick={this.displayProfileUpdatePage}>edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default View;