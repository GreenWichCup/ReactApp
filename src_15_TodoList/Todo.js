import React, { Component } from "react";
import "./Todo.css"

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state ={
      editActive : false,
      editTodo:this.props.name,
    }
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this) ;
    this.handleComplete=this.handleComplete.bind(this) 
}

  handleRemove() {
    this.props.remove(this.props.id);
  }

  handleEditSubmit(e){
    e.preventDefault();
    this.setState({editActive:false})
    this.props.editTodo(this.state.editTodo,this.props.id)
  }
  handleEdit(){
    this.setState({editActive:true,idEdited:this.props.id})
    console.log(this.props.id)
  }
  handleChange(evt){
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleComplete(){
    this.props.toggleCompleted(this.props.id,this.props.todoCompleted)
  }
  componentDidUpdate(prevProps,prevState){ 
    console.log("TODO COMPONENT UPTADE HAPPENED")
    console.log(prevProps.name)
    console.log(this.props.name)
  }

  componentWillUnmount(){
    console.log("component is removed from willUnmount methode")
  }

  render() {
    if(this.state.editActive === true){
      return (
        <div>
        <form onSubmit={this.handleEditSubmit} >
          <label htmlFor="changes">Edit Todo : </label>
          <input
            type='text'
            id="changes"
            name="editTodo"
            value={this.state.editTodo}
            placeholder={this.props.name}
            onChange={this.handleChange}
          />
           <button>Save change</button>
        </form>
      </div>
      )
    } else if (this.state.editActive===false)
    return (
      <div  >
         <button onClick={this.handleEdit}>edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li onClick={this.handleComplete} key={this.props.id} className={this.props.todoCompleted ===true ? "line-through":""}>
          {this.props.name}
    </li>     
      </div>
    );
  }
}

export default Todo;
