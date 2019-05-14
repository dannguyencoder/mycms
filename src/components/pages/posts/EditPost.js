import React, {Component} from 'react';
import * as apis from "../../../apis/apis";
import PostForm from "./PostForm";

class EditPost extends Component {

    constructor(props) {
        super(props);
        const currentPostId = this.props.location.state.postId;
        console.log("current user id: ");
        console.log(this.props);
        this.state = {
            postId: currentPostId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(postData) {
        apis.updatePost(postData)
            .then(response => {
                console.log("my response------------------");
                console.log(response);
                this.props.history.push("/admin/posts/readPosts")
            })
            .catch(error => {
                console.log("my error----------------------");
                console.log(error);
                alert(error);
            });
    }


    render() {
        return (
            <PostForm isEdit={true} postId={this.state.postId} onSubmit={this.handleSubmit} />
        );
    }
}

export default EditPost;