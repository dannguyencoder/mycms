import React, {Component} from 'react';
import TextEditor from "../../utils/TextEditor";

class AddPost extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="panel panel-default">
                    <div className="panel-heading main-color-bg">
                        <h3 className="panel-title">Edit Page</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label>Post Title</label>
                                <input type="text" className="form-control" placeholder="Post Title"/>
                            </div>
                            <div className="form-group">
                                <label>Post Category</label>
                                <select className="form-control" id="postCategory">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1">Avatar</label>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                            </div>
                            <div className="form-group">
                                <label>Language</label>
                                <select className="form-control" id="postCategory">
                                    <option>Tiếng Việt</option>
                                    <option>English</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Post Content</label>
                                <TextEditor/>
                                {/*<textarea name="editor1" className="form-control" placeholder="Page Body"*/}
                                {/*defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">*/}
                                {/*</textarea>*/}
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" defaultChecked/> <b>isActive</b>
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" defaultChecked/> <b>isVisible</b>
                                </label>
                            </div>
                            <div className="form-group">
                                <label>Meta Tags</label>
                                <input type="text" className="form-control" placeholder="Add Some Tags..."
                                       defaultValue="tag1, tag2"/>
                            </div>
                            <div className="form-group">
                                <label>Meta Description</label>
                                <input type="text" className="form-control" placeholder="Add Meta Description..."
                                       defaultValue="Replace this description..."/>
                            </div>
                            <div className="form-group">
                                <label>Domain</label>
                                <select className="form-control" id="domain">
                                    <option>ViettelPay.vn</option>
                                    <option>Bảo Hiểm</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Content Type</label>
                                <select className="form-control" id="contentType">
                                    <option>Bài Viết</option>
                                    <option>Video</option>
                                    <option>Ảnh</option>
                                    <option>Album Ảnh</option>
                                    <option>Album Video</option>
                                    <option>Banner</option>
                                    <option>Slider</option>
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