import React, { Component } from 'react';

class ModalUserForm extends Component {


    render() {
        return (
            // Modal 
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">

                    {/* Modal content */}
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
                        </div>
                        <div className="modal-body">
                            {this.props.errorList.map((error, index) => (
                                <p className="errorMessage">Error: {index}</p>
                            ))}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ModalUserForm;