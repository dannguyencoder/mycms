import React from 'react';
import * as apis from "../../../apis/apis";

class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            roleId: 0,
            isActive: 1,
            isAdmin: 0
        };



        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleComponentChange = this.handleComponentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fetchCurrentUer() {
        if (this.props.userId) {
            const currentUserId = this.props.userId;
            console.log("current category id--------------");
            console.log(currentUserId);

            apis.getSingleUser(currentUserId)
                .then(response => {
                    console.log('current user info');
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
                        user: {}
                    })
                });
        }
    }

    componentDidMount() {
        this.getAllRoles();
        /*
        * vinhnq21: màn add và edit chỉ khác nhau ở 2 chổ:
        * 1. gọi api nào khi submit
        * 2. có fetch item hiện tại không
        * */
        if (this.props.isEdit) {
            this.fetchCurrentUer();
        }
    }

    getAllRoles() {
        apis.getAllRoles()
            .then(response => {
                console.log("response from getting roles");
                console.log(response);
                const allRoles = response.data;
                if (allRoles.length > 0) {
                    this.setState({
                        allRoles: allRoles,
                        roleId: allRoles[0].id
                    });
                }

            })
            .catch((error) => {
                console.log("error getting roles -------------");
                console.log(error);
                this.setState({
                    allRoles: []
                })
            });

    };

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

        console.log([name])

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

        const userData = this.state;

        delete userData.allRoles;

        console.log("submit data-----------");
        console.log(userData);

        this.props.onSubmit(userData);
        /*
        * vinhnq21: màn add và edit chỉ khác nhau ở 2 chổ:
        * 1. gọi api nào khi submit
        * 2. có fetch item hiện tại không
        * */
    }

    render() {
       return (
           <React.Fragment>
               <div className="panel panel-default">
                   <div className="panel-heading main-color-bg">
                       <h3 className="panel-title">User Form</h3>
                   </div>
                   <div className="panel-body">
                       <form onSubmit={this.handleSubmit}>
                           <div className="form-group">
                               <label>Username</label>
                               <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} className="form-control" placeholder="Username"/>
                           </div>
                           <div className="form-group">
                               <label>Password</label>
                               <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} className="form-control" placeholder="Password"/>
                           </div>
                           <div className="form-group">
                               <label>Email</label>
                               <input name="email" type="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" placeholder="Email"/>
                           </div>
                           <div className="form-group">
                               <label>Role</label>
                               <select name="roleId" value={this.state.roleId} onChange={this.handleInputChange}
                                       className="form-control" id="parentCategory">
                                   {/*<option value="0">0</option>*/}
                                   {/*<option value="1">1</option>*/}
                                   {/*<option value="2">2</option>*/}
                                   {/*<option value="3">3</option>*/}
                                   {
                                       this.state.allRoles && this.state.allRoles.map(role => {
                                           return (
                                               <option key={role.id} value={role.id}>{role.name}</option>
                                           );
                                       })
                                   }
                               </select>
                           </div>
                           <div className="checkbox">
                               <label>
                                   <input name="isActive" value={this.state.isActive} checked={this.state.isActive === 1} onChange={this.handleInputChange}
                                          type="checkbox"/> <b>isActive</b>
                               </label>
                           </div>
                           <div className="checkbox">
                               <label>
                                   <input name="isAdmin" value={this.state.isAdmin} checked={this.state.isAdmin === 1} onChange={this.handleInputChange}
                                          type="checkbox"/> <b>isAdmin</b>
                               </label>
                           </div>
                           <input type="submit" className="btn btn-default" value="Submit"/>
                       </form>
                   </div>
               </div>
           </React.Fragment>
       )
    }
}

export default UserForm;