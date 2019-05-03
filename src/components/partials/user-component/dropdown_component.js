import React from "react";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  onChangeDropdown = e => {
    console.log(e.target.value);
    this.props.callbackFn(e.target.value);
  };
  
  render() {
    const makeDropDown = () => {
      this.props.data.map(x => {
        console.log(x.id)
      })
      
      return this.props.data.map(x => {
        return (
          <option key={x.id} value={x.id}>
            {x.name}
          </option>
        );
      });
    };
    return (
      <div>
        <div>
          <select value={this.props.value} onChange={this.onChangeDropdown} className="form-control">
            <option value="" disabled>
              {this.props.defaultOption}
            </option>

            {makeDropDown()}
          </select>
        </div>
      </div>
    );
  }
}

export default DropDown;
