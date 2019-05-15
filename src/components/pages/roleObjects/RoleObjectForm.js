import React from 'react';
import * as apis from "../../../apis/apis";

class RoleObjectForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            url: '',
            isActive: 1,
            isVisible: 1
        };



        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleComponentChange = this.handleComponentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fetchCurrentRoleObject() {
        if (this.props.roleObjectId) {
            const currentRoleObjectId = this.props.roleObjectId;
            console.log("current category id--------------");
            console.log(currentRoleObjectId);

            apis.getSingleRoleObject(currentRoleObjectId)
                .then(response => {
                    console.log('current role object info');
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
                        roleObject: {}
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
            this.fetchCurrentRoleObject();
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

    getAllObjects() {
        apis.getAllObjects()
            .then(response => {
                console.log("response from getting objects");
                console.log(response);
                const allObjects = response.data;
                if (allObjects.length > 0) {
                    this.setState({
                        allObjects: allObjects,
                        objectId: allObjects[0].id
                    });
                }

            })
            .catch((error) => {
                console.log("error getting objects -------------");
                console.log(error);
                this.setState({
                    allObjects: []
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

        const roleObjectData = this.state;

        console.log("submit data-----------");
        console.log(roleObjectData);

        this.props.onSubmit(roleObjectData);
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
                       <h3 className="panel-title">Role Object Form</h3>
                   </div>
                   <div className="panel-body">
                       <form onSubmit={this.handleSubmit}>
                           <div className="row">
                               <div className="col-md-6">
                                   {
                                       this.state.allRoles && this.state.allRoles.map(role => {
                                           return (
                                               <div className="radio">
                                                   <label>
                                                       <input type="radio" name="optradio" checked/>
                                                       Option 1
                                                   </label>
                                               </div>
                                           )
                                       })
                                   }
                               </div>
                               <div className="col-md-6">
                                   {
                                       this.state.allObjects && this.state.allObjects.map(object => {
                                           return (
                                               <div className="checkbox">
                                                   <label>
                                                       <input name="isVisible" value={this.state.isVisible}
                                                              onChange={this.handleInputChange} type="checkbox"/>
                                                       <b>isVisible</b>
                                                   </label>
                                               </div>
                                           )
                                       })
                                   }
                               </div>
                           </div>
                           <input type="submit" className="btn btn-default" value="Submit"/>
                       </form>
                   </div>
               </div>
           </React.Fragment>
       )
    }
}

export default RoleObjectForm;