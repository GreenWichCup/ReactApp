import React, { Component } from "react";
import "./BoxForm.css";

class BoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: "",
      width: "",
      color: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value }); //reuseable almost all the time for multiple Input Forms
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addBox(this.state)
    
    this.setState({
      height: "",
      width: "",
      color: "",
    });
  }

  render() {
    return (
      <div className="Form">
        <h1>parameter to set up</h1>
        <form className="Input" onSubmit={this.handleSubmit}>
        <p> Height :
          <input
          key="boxHeight"
          type="text"
            name="height" //name should always match the state reference
            value={this.state.height}
            placeholder={0}
            onChange={this.handleChange}
          />
          </p>
          <p> Width :
          <input
          key="boxWidth"
          type= "test"
            name="width" //name should always match the state reference
            value={this.state.width}
            placeholder={0}
            onChange={this.handleChange}
          />
          </p>
         <p> Background-color :
         <input
          key="backgroundColor"
          type="text"
            name="color"
            value={this.state.color}
            placeholder=""
            onChange={this.handleChange}
          />
         </p>      
            <button>Read data!</button>
        </form>
      </div>
    );
  }
}

export default BoxForm;
