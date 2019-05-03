import React, {Component} from 'react';
import TextEditor from "../../utils/TextEditor";
import ImageUpload from "../../utils/ImageUpload";
import axios from 'axios';

import * as apis from '../../utils/apis';


class AddCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            parentId: 0,
            friendlyUrl: '',
            order: 0,
            isActive: 1,
            isVisible: 1,
            metaKeywords: '',
            metaDescription: '',
            userId: 0,
            template: 0,
            languageId: 0,
            domainId: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleComponentChange = this.handleComponentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        console.log(target.checked);
        let value;
        if (target.type === 'checkbox') {
            if (target.checked) {
                value = 0;
            } else {
                value = 1;
            }
        } else {
            value = target.value;
        }
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log("current state");
        console.log(this.state);
    }

    handleComponentChange(componentData) {
        // console.log("componentData-----");
        // console.log(componentData);
        // console.log("---total State");
        // console.log(this.state);
        this.setState({...this.state, ...componentData});
        // console.log("final state: ")
        // console.log(this.state);
    }

    handleSubmit(event) {
        event.preventDefault();
        const categoryData = this.state;
        categoryData.friendlyUrl = "/" + categoryData.friendlyUrl.replace("/", "");
        console.log("submit data-----------");
        console.log(this.state);

        apis.addCategory(categoryData)
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
            <React.Fragment>
                <div className="panel panel-default">
                    <div className="panel-heading main-color-bg">
                        <h3 className="panel-title">Edit Page</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Category Name</label>
                                <input name="name" value={this.state.name} onChange={this.handleInputChange}
                                       type="text" className="form-control" placeholder="Category Name"/>
                            </div>
                            <div className="form-group">
                                <label>Parent Category</label>
                                <select name="parentId" value={this.state.parentId} onChange={this.handleInputChange}
                                        className="form-control" id="parentCategory">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Category "Friendly" URL</label>
                                <div className="input-group">
                                    <span className="input-group-addon">/</span>
                                    <input name="friendlyUrl" value={this.state.friendlyUrl.replace("/", "")} onChange={this.handleInputChange}
                                           type="text" className="form-control" placeholder="Category &quot;Friendly&quot; URL"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Order</label>
                                <select name="order" value={this.state.order} onChange={this.handleInputChange}
                                        className="form-control" id="order">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            {/*<div className="form-group">*/}
                                {/*<label htmlFor="exampleFormControlFile1">Avatar</label>*/}
                                {/*/!*<input type="file" className="form-control-file" id="exampleFormControlFile1"/>*!/*/}
                                {/*<ImageUpload changeHandler={this.handleComponentChange}/>*/}
                            {/*</div>*/}
                            <div className="checkbox">
                                <label>
                                    <input name="isActive" value={this.state.isActive} onChange={this.handleInputChange}
                                           type="checkbox" defaultChecked/> <b>isActive</b>
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input name="isVisible" value={this.state.isVisible}
                                           onChange={this.handleInputChange} type="checkbox" defaultChecked/>
                                    <b>isVisible</b>
                                </label>
                            </div>
                            <div className="form-group">
                                <label>Meta Keywords</label>
                                <input name="metaKeywords" value={this.state.metaKeywords} onChange={this.handleInputChange}
                                       type="text" className="form-control" placeholder="Add Some Tags..."/>
                            </div>
                            <div className="form-group">
                                <label>Meta Description</label>
                                <input name="metaDescription" value={this.state.metaDescription} onChange={this.handleInputChange}
                                       type="text" className="form-control" placeholder="Add Meta Description..."/>
                            </div>
                            <div className="form-group">
                                <label>Template</label>
                                <select name="template" value={this.state.template} onChange={this.handleInputChange}
                                        className="form-control" id="template">
                                    <option value="0">Bài viết đều 2 cột</option>
                                    <option value="1">Sản phầm 1 hàng</option>
                                    <option value="2">Sản phầm 2 hàng</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>User ID</label>
                                <select name="userId" value={this.state.userId} onChange={this.handleInputChange}
                                        className="form-control" id="userId">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Language</label>
                                <select name="languageId" value={this.state.languageId} onChange={this.handleInputChange}
                                        className="form-control" id="language">
                                    <option value="0">Tiếng Việt</option>
                                    <option value="1">English</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Domain</label>
                                <select name="domainId" value={this.state.domainId} onChange={this.handleInputChange}
                                        className="form-control" id="domain">
                                    <option value="0">ViettelPay.vn</option>
                                    <option value="1">Bảo Hiểm</option>
                                </select>
                            </div>
                            <input type="submit" className="btn btn-default" value="Submit"/>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AddCategory;