import React, {Component} from 'react';
import TextEditor from "../../elements/TextEditor";
import ImageUpload from "../../elements/ImageUpload";
import axios from 'axios';

import * as apis from '../../../apis/apis';


class AddPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            categoryId: 1,
            avatar: '',
            languageId: 1,
            postContent: '',
            isActive: 1,
            isVisible: 1,
            metaKeywords: '',
            metaDescription: '',
            domainId: 1,
            contentId: 0,
            allCategories: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleComponentChange = this.handleComponentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getAllCategories();
        this.getAllLanguages();
        this.getAllDomains();
    }

    getAllCategories() {
        apis.getAllCategories()
            .then(response => {
                const allCategories = response.data;
                if (allCategories.length > 0) {
                    this.setState({
                        allCategories: allCategories,
                        categoryId: allCategories[0].id
                    });
                }

            })
            .catch((error) => {
                console.log("error-------------")
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
    alert(name)
        this.setState({
            [name]: value
        });
        setTimeout(() => {
            console.log("current state");
            console.log(this.state);
        }, 2000)
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
        console.log("submit data-----------");
        console.log(this.state);
        event.preventDefault();

        const postData = this.state;
        postData.postContent = postData.outputHTML;

        /*
        * vinhnq21: màn add và edit chỉ khác nhau ở 2 chổ:
        * 1. gọi api nào khi submit
        * 2. có fetch item hiện tại không
        * */
        apis.addPost(postData)
            .then(response => {
                console.log("my response------------------");
                console.log(response);
                this.props.history.push("/admin/posts/readPosts");
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
                                <label>Post Title</label>
                                <input name="title" value={this.state.title} onChange={this.handleInputChange}
                                       type="text" className="form-control" placeholder="Post Title"/>
                            </div>
                            <div className="form-group">
                                <label>Post Category</label>
                                <select name="categoryId" value={this.state.categoryId}
                                        onChange={this.handleInputChange}
                                        className="form-control" id="postCategory">
                                    {/*<option value="0">1</option>*/}
                                    {/*<option value="1">2</option>*/}
                                    {/*<option value="2">3</option>*/}
                                    {/*<option value="3">4</option>*/}
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
                                <label htmlFor="exampleFormControlFile1">Avatar</label>
                                {/*<input type="file" className="form-control-file" id="exampleFormControlFile1"/>*/}
                                <ImageUpload changeHandler={this.handleComponentChange}/>
                            </div>
                            <div className="form-group">
                                <label>Language</label>
                                <select name="languageId" value={this.state.languageId}
                                        onChange={this.handleInputChange}
                                        className="form-control" id="language">
                                    {/*<option value="0">Tiếng Việt</option>*/}
                                    {/*<option value="1">English</option>*/}
                                    {
                                        this.state.allLanguages && this.state.allLanguages.map((language) => {
                                            return (
                                                <option value={language.id}>{language.name}</option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Post Content</label>
                                <TextEditor initialContent={this.state.postContent}
                                            changeHandler={this.handleComponentChange}/>
                                {/*<textarea name="editor1" className="form-control" placeholder="Page Body"*/}
                                {/*defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">*/}
                                {/*</textarea>*/}
                            </div>
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
                                <label>Meta Tags</label>
                                <input name="metaKeywords" value={this.state.metaKeywords}
                                       onChange={this.handleInputChange}
                                       type="text" className="form-control" placeholder="Add Some Tags..."/>
                            </div>
                            <div className="form-group">
                                <label>Meta Description</label>
                                <input name="metaDescription" value={this.state.metaDescription}
                                       onChange={this.handleInputChange}
                                       type="text" className="form-control" placeholder="Add Meta Description..."/>
                            </div>
                            <div className="form-group">
                                <label>Domain</label>
                                <select name="domainId" value={this.state.domainId} onChange={this.handleInputChange}
                                        className="form-control" id="domain">
                                    {/*<option value="0">ViettelPay.vn</option>*/}
                                    {/*<option value="1">Bảo Hiểm</option>*/}
                                    {
                                        this.state.allDomains && this.state.allDomains.map((domain) => {
                                            return (
                                                <option value={domain.id}>{domain.name}</option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Content Type</label>
                                <select name="contentId" value={this.state.contentId} onChange={this.handleInputChange}
                                        className="form-control" id="contentType">
                                    <option value="0">Bài Viết</option>
                                    <option value="1">Video</option>
                                    <option value="2">Ảnh</option>
                                    <option value="3">Album Ảnh</option>
                                    <option value="4">Album Video</option>
                                    <option value="5">Banner</option>
                                    <option value="6">Slider</option>
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

export default AddPost;