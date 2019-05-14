import React from 'react';
import ObjectForm from './ObjectForm';
import * as apis from "../../../apis/apis";

class AddObject extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(objectData) {
        apis.addObject(objectData)
            .then(response => {
                console.log("my response------------------");
                console.log(response);
                this.props.history.push("/admin/objects/readObjects")
            })
            .catch(error => {
                console.log("my error----------------------");
                console.log(error);
                alert(error);
            });
    }


    render() {
        return (
            <ObjectForm isAdd={true} onSubmit={this.handleSubmit} />
        );
    }
}

export default AddObject;