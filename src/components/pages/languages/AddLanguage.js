import React from 'react';
import LanguageForm from './LanguageForm';
import * as apis from "../../../apis/apis";

class AddLanguage extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(languageData) {
        apis.addLanguage(languageData)
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
            <LanguageForm isAdd={true} onSubmit={this.handleSubmit} />
        );
    }
}

export default AddLanguage;