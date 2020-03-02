import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import FitProfilePic from '../../assets/images/fitProfilePic.png';
import { ListInput } from "../../components/input/ListInput";

class Update extends Component {
    formref = null;

    getFormValues = () => {
        if (this.formref) {
            let values = this.formref.getValues()
            console.log(values);
        }
    }

    cancelEdit = () => {
        this.props.pushRoute("/profile");
    }

    render() {
        return (<div style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center', padding: '20px', height: '100%' }}>
            <div style={{ display: 'flex', flex: 3, flexDirection: 'row' }} >
                <div style={{ display: 'flex', flex: 3, flexDirection: 'column' }}>
                    <ListInput inputs={[
                        { label: 'Name', type: 'text' },
                        { label: 'Age', type: 'text' },
                        { label: 'Gender', type: 'radio', options: ['Male', 'Female', 'Other'] },
                        { label: 'Height', type: 'text' },
                        { label: 'Weight', type: 'text' },
                        { label: 'Email', type: 'text' },
                        { label: 'Phone', type: 'text' },
                        { label: 'City', type: 'text' },
                        { label: 'ZipCode', type: 'text' },
                        { label: 'GymAccess', type: 'text' },
                        { label: 'Target', type: 'text' },
                        { label: 'LanguagePref', type: 'text' }
                    ]}
                        ref={ref => this.formref = ref}
                    />
                </div>

                <div style={{ display: 'flex', flex: 1, alignSelf: 'flex-start', flexDirection: 'column', alignContent: 'right', paddingLeft: '20px' }}>
                    <div>
                        <div style={{ display: 'flex', flex: 10, alignSelf: 'flex-start', marginBottom: '234px' }}>
                            <img style={{ marginTop: '10px' }} src={FitProfilePic}></img>
                        </div>
                        <div style={{ display: 'flex', flex: 1, alignSelf: 'flex-start', flexDirection: 'row' }}>
                            <button onClick={this.cancelEdit}>cancel</button>
                            <div style={{ flexGrow: 1 }} />
                            <button onClick={this.getFormValues}>save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

const mapStateToProps = (state, ownProps) => ({
});
const mapDispatchToProps = {
    pushRoute: push
};
export default connect(mapStateToProps, mapDispatchToProps)(Update);