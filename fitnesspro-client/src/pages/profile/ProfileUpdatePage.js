import React, { Component } from "react";
import FitProfilePic from '../../assets/images/fitProfilePic.png';
import NavBar from "../../components/navBar/NavBar";
import { ListInput } from "../../components/input/ListInput";

class ProfileUpdatePage extends Component {
    formref = null;

    getFormValues = () => {
        if (this.formref) {
            let values = this.formref.getValues()
            console.log(values);
        }
    }

    render() {
        return (
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <NavBar type="user" />
                <div style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center', padding: '20px', height: '100%' }}>
                    <div style={{ display: 'flex', flex: 3, flexDirection: 'row' }} >
                        <div style={{ display: 'flex', flex: 3, flexDirection: 'column' }}>
                            <ListInput inputs={[
                                { label: 'Name', type: 'text' },
                                { label: 'Age', type: 'text' },
                                { label: 'Gender', type: 'radio', options:['Male','Female','Other'] },
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

                        <div style={{ display: 'flex', flex: 1, alignSelf: 'flex-start' }}>
                            <img src={FitProfilePic}></img>
                            <button onClick={this.getFormValues}>update</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileUpdatePage;