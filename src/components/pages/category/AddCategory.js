import React from 'react';
import * as apis from "../../../apis/apis";
import CategoryForm from "./CategoryForm";

class AddCategory extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(categoryData) {
        apis.addCategory(categoryData)
            .then(response => {
                console.log("my response------------------");
                console.log(response);
                this.props.history.push("/admin/categories/readCategories")
            })
            .catch(error => {
                console.log("my error----------------------");
                console.log(error);
                alert(error);
            });
    }


    render() {
        return (
            <CategoryForm isAdd={true} onSubmit={this.handleSubmit} />
        );
    }
}

export default AddCategory;