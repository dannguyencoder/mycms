import React from 'react';
import * as apis from "../../../apis/apis";

class ObjectForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            url: '',
            parentId: 1,
            order: 1,
            isActive: 1,
            isVisible: 1
        };



        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleComponentChange = this.handleComponentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fetchCurrentObject() {
        if (this.props.objectId) {
            const currentObjectId = this.props.objectId;
            console.log("current category id--------------");
            console.log(currentObjectId);

            apis.getSingleObject(currentObjectId)
                .then(response => {
                    console.log('current object info');
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
                        object: {}
                    })
                });
        }
    }

    componentDidMount() {
        this.getAllObjects();
        this.getAllDomains();
        /*
        * vinhnq21: màn add và edit chỉ khác nhau ở 2 chổ:
        * 1. gọi api nào khi submit
        * 2. có fetch item hiện tại không
        * */
        if (this.props.isEdit) {
            this.fetchCurrentObject();
        }
    }

    getAllObjects() {
        apis.getAllObjects()
            .then(response => {
                console.log("response from getting objects");
                console.log(response);
                const allObjects = response.data;
                if (allObjects.length > 0) {
                    this.setState({
                        allObjects: allObjects,
                        parentId: allObjects[0].id
                    });
                }

            })
            .catch((error) => {
                console.log("error getting roles -------------");
                console.log(error);
                this.setState({
                    allObjects: []
                })
            });

    };

    getAllDomains() {
        apis.getAllDomains()
            .then(response => {
                const allDomains = response.data
                this.setState({
                    allDomains: response.data,
                    domainId: allDomains[0].id
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

        const objectData = this.state;

        console.log("submit data-----------");
        console.log(objectData);

        this.props.onSubmit(objectData);
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
                       <h3 className="panel-title">Object Form</h3>
                   </div>
                   <div className="panel-body">
                       <form onSubmit={this.handleSubmit}>
                           <div className="form-group">
                               <label>Name</label>
                               <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} className="form-control" placeholder="Object name"/>
                           </div>
                           <div className="form-group">
                               <label>URL</label>
                               <input name="url" type="text" value={this.state.url} onChange={this.handleInputChange} className="form-control" placeholder="Object URL"/>
                           </div>
                           <div className="form-group">
                               <label>Parent Object ID</label>
                               <select name="parentId" value={this.state.parentId} onChange={this.handleInputChange}
                                       className="form-control" id="parentObject">
                                   {/*<option value="0">0</option>*/}
                                   {/*<option value="1">1</option>*/}
                                   {/*<option value="2">2</option>*/}
                                   {/*<option value="3">3</option>*/}
                                   {
                                       this.state.allObjects && this.state.allObjects.map(object => {
                                           return (
                                               <option key={object.id} value={object.id}>{object.name}</option>
                                           );
                                       })
                                   }
                               </select>
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

export default ObjectForm;