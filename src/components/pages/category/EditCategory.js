import React, {Component} from 'react';
import TextEditor from "../../elements/TextEditor";
import ImageUpload from "../../elements/ImageUpload";
import axios from 'axios';

import * as apis from '../../../apis/apis';
import CategoryForm from './CategoryForm';


class EditCategory extends Component {

    constructor(props) {
        super(props);
        const currentCategoryId = this.props.location.state.categoryId;
        console.log("current user id: ");
        console.log(this.props);
        this.state = {
            categoryId: currentCategoryId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(categoryData) {
        apis.updateCategory(categoryData)
            .then(response => {
                console.log("my response------------------");
                console.log(response);
                this.props.history.push("/admin/category/readCategories")
            })
            .catch(error => {
                console.log("my error----------------------");
                console.log(error);
                alert(error);
            });
    }

    render() {
        return (
            <CategoryForm isEdit={true} categoryId={this.state.categoryId} onSubmit={this.handleSubmit} />
        );
    }
}

export default EditCategory;