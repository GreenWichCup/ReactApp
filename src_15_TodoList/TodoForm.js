import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({todo:""});
  }

  render() {
      //the button in the form has to be in the form. Because if not the event submit won't be trigger
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label htmlFor="newTodo">New Todo : </label>
          <input
            type='text'
            id="newTodo"
            name="todo"
            value={this.state.todo}
            placeholder="write your todo here"
            onChange={this.handleChange}
          />
           <button >Add todo</button>
        </form>
       
      </div>
    );
  }
}

export default TodoForm;
