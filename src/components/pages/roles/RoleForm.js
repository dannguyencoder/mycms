import React from 'react';
import * as apis from "../../../apis/apis";

class RoleForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            domainId: 1,
            isActive: 1,
            isVisible: 1
        };



        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleComponentChange = this.handleComponentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fetchCurrentRole() {
        if (this.props.roleId) {
            const currentRoleId = this.props.roleId;
            console.log("current role id--------------");
            console.log(currentRoleId);

            apis.getSingleRole(currentRoleId)
                .then(response => {
                    console.log('current role info');
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
                        role: {}
                    })
                });
        }
    }

    componentDidMount() {
        this.getAllDomains();
        /*
        * vinhnq21: màn add và edit chỉ khác nhau ở 2 chổ:
        * 1. gọi api nào khi submit
        * 2. có fetch item hiện tại không
        * */
        if (this.props.isEdit) {
            this.fetchCurrentRole();
        }
    }

    getAllDomains() {
        apis.getAllDomains()
            .then(response => {
                this.setState({
                    allDomains: response.data
                });
            })
            .catch((error) => {
                console.log("error-------------")
                console.log(error);
                this.setState({
                    allDomains: []
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

        const roleData = this.state;

        delete roleData.allDomains;

        console.log("submit data-----------");
        console.log(roleData);

        this.props.onSubmit(roleData);
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
                       <h3 className="panel-title">Role Form</h3>
                   </div>
                   <div className="panel-body">
                       <form onSubmit={this.handleSubmit}>
                           <div className="form-group">
                               <label>Name</label>
                               <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} className="form-control" placeholder="Role name"/>
                           </div>
                           <div className="form-group">
                               <label>Domain</label>
                               <select name="domainId" value={this.state.domainId} onChange={this.handleInputChange}
                                       className="form-control" id="parentCategory">
                                   {/*<option value="0">0</option>*/}
                                   {/*<option value="1">1</option>*/}
                                   {/*<option value="2">2</option>*/}
                                   {/*<option value="3">3</option>*/}
                                   {
                                       this.state.allDomains && this.state.allDomains.map(domain => {
                                           return (
                                               <option key={domain.id} value={domain.id}>{domain.name}</option>
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
                                   <input name="isVisible" value={this.state.isVisible}
                                          checked={this.state.isVisible === 1}
                                          onChange={this.handleInputChange} type="checkbox"/>
                                   <b>isVisible</b>
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

export default RoleForm;