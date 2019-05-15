import React, {Component} from 'react';
import TextEditor from "../../elements/TextEditor";
import ImageUpload from "../../elements/ImageUpload";
import axios from 'axios';

import * as apis from '../../../apis/apis';


class CategoryForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            parentId: 1,
            friendlyUrl: '',
            order: 0,
            isActive: 1,
            isVisible: 1,
            metaKeywords: '',
            metaDescription: '',
            userId: 1,
            template: 1,
            languageId: 1,
            domainId: 1
        };



        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleComponentChange = this.handleComponentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fetchCurrentCategory() {
        const currentCategoryId = this.props.categoryId;
        console.log("current category id--------------");
        console.log(currentCategoryId);

        apis.getSingleCategory(currentCategoryId)
            .then(response => {
                console.log('current category info');
                console.log(typeof (response));
                console.log(response);
                // if (!response.data) {
                //     this.setState({
                //         allCategories: []
                //     })
                //     return;
                // }
                this.setState(response.data);
            })
            .catch((error) => {
                console.log("error-------------");
                console.log(error);
                this.setState({
                    category: {}
                })
            });
    }

    componentDidMount() {
        this.getAllCategories();
        this.getAllDomains();
        this.getAllLanguages();
        /*
        * vinhnq21: màn add và edit chỉ khác nhau ở 2 chổ:
        * 1. gọi api nào khi submit
        * 2. có fetch item hiện tại không
        * */
        if (this.props.isEdit) {
            this.fetchCurrentCategory();
        }

    }

    getAllCategories() {
        apis.getAllCategories()
            .then(response => {
                const allCategories = response.data;
                if (allCategories.length > 0) {
                    this.setState({
                        allCategories: allCategories,
                        parentId: allCategories[0].id
                    });
                }

            })
            .catch((error) => {
                console.log("error-------------");
                console.log(error);
                this.setState({
                    allCategories: []
                })
            });

    };

    getAllDomains() {
        apis.getAllDomains()
            .then(response => {
                console.log("domains-----------");
                console.log(response);
                const allDomains = response.data;
                if (allDomains.length > 0) {
                    this.setState({
                        allDomains: allDomains,
                        domainId: allDomains[0].id
                    })
                }
            })
            .catch(error => {
                console.log("error getting domains----------");
                console.log(error);
                this.setState({
                    allDomains: []
                });
            });
    }

    getAllLanguages() {
        apis.getAllLanguages()
            .then(response => {
                console.log("languages------------");
                console.log(response);
                const allLanguages = response.data;
                if (allLanguages.length > 0) {
                    this.setState({
                        allLanguages: allLanguages,
                        languageId: allLanguages[0].id
                    })
                }
            })
            .catch(error => {
                console.log("error getting languages------------");
                console.log(error);
                this.setState({
                    allLanguages: []
                });
            });
    }

    handleInputChange(event) {
        const target = event.target;
        console.log(target.checked);
        let value;
        if (target.type === 'checkbox') {
            if (target.checked) {
                value = 1;
            } else {
                value = 0;
            }
        } else {
            value = target.value;
        }
        const name = target.name;

        this.setState({
            [name]: value
        });
        setTimeout(() => {
            console.log("current state");
            console.log(this.state);
        }, 2000);
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

        delete categoryData.allDomains;
        delete categoryData.allLanguages;
        delete categoryData.allCategories;

        /*
        * vinhnq21: màn add và edit chỉ khác nhau ở 2 chổ:
        * 1. gọi api nào khi submit
        * 2. có fetch item hiện tại không
        * */

        this.props.onSubmit(categoryData);
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
                                    {/*<option value="0">0</option>*/}
                                    {/*<option value="1">1</option>*/}
                                    {/*<option value="2">2</option>*/}
                                    {/*<option value="3">3</option>*/}
                                    {
                                        this.state.allCategories && this.state.allCategories.map(category => {
                                            return (
                                                <option key={category.id} value={category.id}>{category.name}</option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Category "Friendly" URL</label>
                                <div className="input-group">
                                    <span className="input-group-addon">/</span>
                                    <input name="friendlyUrl" value={this.state.friendlyUrl.replace("/", "")} onChange={this.handleInputChange}
                                           type="text" className="form-control" placeholder="Category &quot;Friendly&quot; URL"/>
                                </div>
                                {/*<input name="friendlyUrl" value={"/" + this.state.friendlyUrl.replace("/", "")} onChange={this.handleInputChange}*/}
                                {/*type="text" className="form-control" placeholder="Category &quot;Friendly&quot; URL"/>*/}
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
                                    <input name="isActive" value={this.state.isActive} checked={this.state.isActive === 1} onChange={this.handleInputChange}
                                           type="checkbox"/> <b>isActive</b>
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input name="isVisible" value={this.state.isVisible} checked={this.state.isVisible === 1}
                                           onChange={this.handleInputChange} type="checkbox"/>
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
                                    {/*<option value="0">Tiếng Việt</option>*/}
                                    {/*<option value="1">English</option>*/}
                                    {
                                        this.state.allLanguages && this.state.allLanguages.map((language) => {
                                            return (
                                                <option key={language.id} value={language.id}>{language.name}</option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Domain</label>
                                <select name="domainId" value={this.state.domainId} onChange={this.handleInputChange}
                                        className="form-control" id="domain">
                                    {
                                        this.state.allDomains && this.state.allDomains.map((domain) => {
                                            return (
                                                <option key={domain.id} value={domain.id}>{domain.name}</option>
                                            );
                                        })
                                    }
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

export default CategoryForm;