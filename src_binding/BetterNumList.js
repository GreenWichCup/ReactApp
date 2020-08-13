import React, { Component } from 'react'
import BetterButton2 from "./BetterButton2";

class BetterNumList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nums: [1, 2, 3, 4],
        };
        this.remove= this.remove.bind(this)
      }
      static defaultProps = {
      };
      remove(num){
          console.log("Removing called")
          console.log(num)
        this.setState(st=>({
            nums: st.nums.filter(n=> n!==num)
        }))
      }
    
      render() {
          let nums =this.state.nums.map(n => <BetterButton2 value={n} funcRemove={this.remove}/>) 
    
        return (
          <div>
              <h1>Better Number List</h1>
              {nums}
          </div>
        );
      }
    }

export default BetterNumList
