import React from "react";
import axios from "axios";

import DropDown from "./dropdown_component";

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      bankData: [],
      stateData: [],
      bankName: "",
      stateName: "",
      validForm: false
    };
  }

  componentDidMount() {
    this.callBankService();
  }

  callBankService = () => {
    axios
      .get("https://biz.timesofindia.indiatimes.com/bankifsc/getlist")
      .then(response => {
        const data = response.data.data;
        this.setState({
          bankData: data,
          stateData: [],
          stateName: "",
          bankName: ""
        });
      });
  };

  callStateService = bankName => {
    axios
      .get(
        "https://biz.timesofindia.indiatimes.com/bankifsc/getlist?seo_bank=" +
          bankName
      )
      .then(response => {
       
      });
  };

  callDistrictService = value => {
    this.setState({ stateName: value });
  };

  render() {
    const validForm = !this.state.validForm;

    return { validForm } ? (
      <div>
        <DropDown
          value={this.state.bankName}
          data={this.state.bankData}
          defaultOption="select Role"
          callbackFn={this.callStateService}
        />
        
      </div>
    ) : (
      <div>hello</div>
    );
  }
}

export default FormComponent;
