import React from 'react';
import Select from 'react-select';
// import 'bootstrap/dist/css/bootstrap.min.css';

// Create a ES6 class component
class DropDown extends React.Component {
    // Use the render function to return JSX component
    render() {
        return (
            <Select id="role" name="role" options={this.props.roles}  />
        );
    }
}


export default DropDown