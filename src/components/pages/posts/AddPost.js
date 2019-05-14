import React from 'react';
import * as apis from "../../../apis/apis";
import PostForm from "./PostForm";

class AddPost extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(postData) {
        apis.addPost(postData)
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
            <PostForm isAdd={true} onSubmit={this.handleSubmit} />
        );
    }
}

export default AddPost;