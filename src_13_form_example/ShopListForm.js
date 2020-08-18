import React, { Component } from 'react'
import "./ShopListForm.css"


class ShopListForm extends Component {
    constructor(props) {
        super(props)
        this.state = {item:"", 
            qty: ""
        }        
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value }); //reuseable almost all the time for multiple Input Forms
      }
      handleSubmit(e) {
        e.preventDefault();
        //pattern passing data up to parent component step 2
        this.props.addItem(this.state) 
        this.setState({ item:"" , qty: "" }); 

      }


    render() {
        return (
            <div className="ShopListForm">
                <h1>List Form goes here...</h1>
                <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="itemName"> Item name </label> 
          <input
          id="itemName"
          type="text"
            name="item"
            value={this.state.item}
            onChange={this.handleChange}
          />
          <label htmlFor="itemQty"> Item quantity </label> 
          <input
          id="itemQty"
          type= "text"
            name="qty" //name should match the state reference
            value={this.state.qty}
            placeholder="quantity"
            onChange={this.handleChange}
          />
         
                    <button >Submit my Input data!</button>
        </form>
            </div>
        )
    }
}

export default ShopListForm
