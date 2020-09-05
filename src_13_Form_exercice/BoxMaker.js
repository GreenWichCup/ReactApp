import React, { Component } from 'react'
import BoxForm from "./BoxForm";
import Box from "./Box";
import uuid from "uuid/dist/v4"

class BoxMaker extends Component {
    constructor(props) {
        super(props)

        this.state = {
             boxList: []
        }
        this.addBox=this.addBox.bind(this)
        this.removeBox=this.removeBox.bind(this)
    }

    removeBox(id){
        this.setState((st)=>({boxList:st.boxList.filter(p=>p.id!==id)}))
        console.log(this.state.boxList)
    }

    addBox(box){
        let newBox= {...box,id:uuid()}
        this.setState(st=>({boxList: [...st.boxList,newBox]}))
        console.log(this.state.boxList)
    }

    render() {
        const loopBox = this.state.boxList.map(b =>(<Box id={b.id} remove={this.removeBox} key={b.id} width={b.width} height={b.height} color={b.color}/>
            ))
        return (
            <div>
            <BoxForm addBox={this.addBox}/>
            <div>
            </div>
                 {loopBox}
            </div>
        )
    }
}

export default BoxMaker
