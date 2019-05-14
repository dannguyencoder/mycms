import React from 'react';
import * as apis from "../../../apis/apis";

class DomainForm extends React.Component {

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

    fetchCurrentDomain() {
        if (this.props.domainId) {
            const currentDomainId = this.props.domainId;
            console.log("current category id--------------");
            console.log(currentDomainId);

            apis.getSingleDomain(currentDomainId)
                .then(response => {
                    console.log('current domain info');
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
                        domain: {}
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
            this.fetchCurrentDomain();
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

        const domainData = this.state;

        console.log("submit data-----------");
        console.log(domainData);

        this.props.onSubmit(domainData);
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
                       <h3 className="panel-title">Domain Form</h3>
                   </div>
                   <div className="panel-body">
                       <form onSubmit={this.handleSubmit}>
                           <div className="form-group">
                               <label>Name</label>
                               <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} className="form-control" placeholder="Domain name"/>
                           </div>
                           <div className="form-group">
                               <label>URL</label>
                               <input name="url" type="text" value={this.state.url} onChange={this.handleInputChange} className="form-control" placeholder="Domain URL"/>
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
                                          onChange={this.handleInputChange} type="checkbox" defaultChecked/>
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

export default DomainForm;