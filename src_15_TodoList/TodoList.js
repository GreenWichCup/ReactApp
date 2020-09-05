import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import uuid from "uuid/dist/v4";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      //{todo:'string', id: 'string'}
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.edit=this.edit.bind(this)
    this.toggleCompleteTodo=this.toggleCompleteTodo.bind(this)
  }

  addTodo(todo) {
    let newTodo = { ...todo, id: uuid(), completed:false};
    this.setState((st) => ({ todoList: [...st.todoList, newTodo] }));
  }

//find todo in array of todo
  edit(todoEdided,idItem){
   const newTodoList = this.state.todoList.map(item=>
    {  
     if(item.id === idItem){
     return {...item, todo : todoEdided, completed :false}
    } return item
     } )
    this.setState({todoList:newTodoList})
  }

  removeTodo(id) {
    this.setState((st) => ({
      todoList: st.todoList.filter((p) => p.id !== id),
    }));
  } 

  toggleCompleteTodo(idItem,completedTodo){
    const newcomplete = this.state.todoList.map(item=>
      {  
       if(item.id === idItem){
        return {...item, completed : !completedTodo}
    } return item
  }) 
    this.setState({todoList:newcomplete})
  }

  render() {
    const loopTodo = this.state.todoList.map((b) =>{
      return (
        <div>
          <Todo toggleCompleted={this.toggleCompleteTodo}  id={b.id} remove={this.removeTodo} name={b.todo} editTodo={this.edit} todoCompleted={b.completed}/>
        </div>
         
    )});
    return (
      <div>
          <TodoForm addTodo={this.addTodo}/>
        <div>
            <ul>
{loopTodo}
            </ul>
          
        </div>
      
      </div>
    );
  }
}
