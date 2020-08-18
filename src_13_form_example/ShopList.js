import React, { Component } from "react";
import ShopListForm from "./ShopListForm";
import uuid from "uuid/dist/v4"
import "./ShopList.css";

class ShopList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { item: "bathSoap", qty: "1 bottle", id: uuid() },
        { item: "plasticBag", qty: "10 units", id: uuid() },
      ],
    };
    //pattern passing data up to parent component step 4 
    this.addItem = this.addItem.bind(this);
  }

  renderItems() {
    return (
      <div className="item">
        <ul>
          {this.state.items.map((p) => (
            <li key={uuid()}>
              {p.item}: {p.qty}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  //pattern passing data up to parent component step 1
  addItem(item) {
    let newItem = {...item, id:uuid()}
    //here we use setState with a callback form because we are adding data into the existing state
    this.setState((state) => ({ items: [...state.items, newItem] }));
  }

  render() {
    return (
      <div className="ShopList">
        {this.renderItems()}
        <ShopListForm
          //pattern passing data up to parent component step 3
          addItem={this.addItem}
        />
      </div>
    );
  }
}

export default ShopList;
