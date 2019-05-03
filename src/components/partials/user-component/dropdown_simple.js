import React from 'react';
import Select from 'react-select';
// import 'bootstrap/dist/css/bootstrap.min.css';

// Create a ES6 class component
class DropDown extends React.Component {
    // Use the render function to return JSX component
    constructor(props) {
        super(props)
        this.state = {
            label: this.props.label,
            value: this.props.value

        }
    }
    componentDidMount() {
        if (this.props.dataDefault !== undefined) {
            this.setState({
                value: this.props.dataDefault
            })

        }
    }
    componentDidUpdate() {

    }

    render() {

        return (
            <div>
                <Select id="role-select" name="role-select" options={this.props.data} />
                <div id="w40">Now Role: {this.props.label}</div>
               </div>
        );
    }
}


export default DropDown