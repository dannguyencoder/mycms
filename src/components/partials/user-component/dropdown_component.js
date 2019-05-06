import React from "react";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
  }

  onChangeDropdown = e => {
    this.props.callbackFn(e.target.value);
  };
  
  render() {
    const makeDropDown = () => {
      
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
