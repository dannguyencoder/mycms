import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import * as apis from '../../utils/apis';

class ReadPosts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allPosts: [],
            error: ''
        }
    }

    getAllPosts = () => {
        apis.getAllPosts()
            .then((response) => {
                console.log("All posts-------------------");
                console.log(response);
                this.setState((prevState) => {
                    console.log("set state of allPosts, type of data: ", typeof response.data);
                    console.log("data", response.data);
                    return {
                        allPosts: response.data
                    }
                });
            })
            .catch((error) => {
                console.log("Error---------------------");
                console.log(error);
                this.setState((prevState) => {
                    return {
                        allPosts: [],
                        error
                    };
                });
            })
    };

    deletePost = (postId) => {
        apis.deletePost(postId)
            .then((response) => {
                console.log("Deleted post----------------");
                console.log(response);
                this.setState((prevState) => {
                    return {
                        deletedPost: response.data
                    }
                })
            })
            .catch((error) => {
                console.log("Error-----------------------");
                console.log(error);
                this.setState((prevState) => {
                    return {error};
                })
            })
    };

    componentDidMount() {
        this.getAllPosts();
    }

    render() {
        console.log('type of allPosts: ', typeof this.state.allPosts);
        console.log('allPosts: ', this.state.allPosts);
        return (
            <React.Fragment>

                <div className="panel panel-default">
                    <div className="panel-heading main-color-bg">
                        <h3 className="panel-title">Posts</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <input className="form-control" type="text" placeholder="Filter Posts..."/>
                            </div>
                        </div>
                        <br/>
                        <table className="table table-striped table-hover">
                            <tbody>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Avatar</th>
                                <th>isActive</th>
                                <th>Domain</th>
                                <th>Language</th>
                                <th>Actions</th>
                            </tr>
                            {

                                this.state.allPosts.map((post) => {
                                    return (
                                        <tr key={post.id}>
                                            <td>{post.title}</td>
                                            <td>{post.category.name}</td>
                                            <td><img src={post.avatar} style={{width: 100, height: 100}}/></td>
                                            <td>{post.isActive === 1 ? "Hoạt động" : "Không hoạt động"}</td>
                                            <td>{post.domain.name}</td>
                                            <td>{post.language.name}</td>
                                            <td>
                                                <Link className="btn btn-default" to={{
                                                    pathname: "/admin/posts/editPost",
                                                    state: {
                                                        postId: post.id
                                                    }
                                                }}>Edit</Link>
                                                <Link className="btn btn-danger" to="#">Delete</Link></td>
                                        </tr>
                                    )
                                })
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ReadPosts;