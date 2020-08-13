import React, { Component } from "react";
import Button2 from "./Button2";

class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nums: [1, 2, 3, 4],
    };
  }
  static defaultProps = {
  };
  remove(num){
    this.setState(st=>({
        nums: st.nums.filter(n=> n!==num)
    }))
  }

  render() {
      let nums =this.state.nums.map(n => <Button2 value={n} funcRemove={()=>this.remove(n)}/>) 

    return (
      <div>
          <h1>First Number List</h1>
          {nums}
      </div>
    );
  }
}

export default NumberList;
