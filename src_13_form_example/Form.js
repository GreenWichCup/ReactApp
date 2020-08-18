import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      zipcode: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value }); //reuseable almost all the time for multiple Input Forms
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(this.state.name);
    this.setState({
      name: "",
      address: "",
      zipcode: "",
    });
  }

  render() {
    return (
      <div className="Form">
        <h1>Form Training</h1>
        <form className="Input" onSubmit={this.handleSubmit}>
        <label htmlFor="userInfos" /*htmlFor should always match id*/>User Name</label> 
          <input
          id="userInfos"
          type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="userZipCode" /*htmlFor should always match id*/>User ZipCode</label> 
          <input
          id="userZipCode"
          type= "text"
            name="zipcode" //name should match the state reference
            value={this.state.zipcode}
            placeholder="zipcode"
            onChange={this.handleChange}
          />
         <label htmlFor="userAddress" /*htmlFor should always match id*/>User Address</label>   
          <input
          id="userAddress"
          type="address"
            name="address"
            value={this.state.address}
            placeholder="address"
            onChange={this.handleChange}
          />
                    <button>Submit my Input data!</button>
        </form>
      </div>
    );
  }
}

export default Form;
