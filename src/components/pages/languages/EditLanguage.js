import React, {Component} from 'react';
import LanguageForm from './LanguageForm';
import * as apis from "../../../apis/apis";

class EditLanguage extends Component {

    constructor(props) {
        super(props);
        const currentLanguageId = this.props.location.state.languageId;
        console.log("current language id: ");
        console.log(this.props);
        this.state = {
            languageId: currentLanguageId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(languageData) {
        apis.updateLanguage(languageData)
            .then(response => {
                console.log("my response------------------");
                console.log(response);
                this.props.history.push("/admin/languages/readLanguages")
            })
            .catch(error => {
                console.log("my error----------------------");
                console.log(error);
                alert(error);
            });
    }


    render() {
        return (
            <LanguageForm isEdit={true} languageId={this.state.languageId} onSubmit={this.handleSubmit} />
        );
    }
}

export default EditLanguage;