import React from 'react';
import TodoList from './TodoList.js';
import InputLine from './InputLine.js';
let dummyData = [{taskText:"Wash dishes", completed:true}, {taskText:"Do laundry", completed:false}];

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    };
  }
  todoXClick(index){
    console.log(dummyData);
    dummyData.splice(index, 1);
    console.log(dummyData);
    this.setState({
      todos: dummyData
    })
  }
  addTodo(e, task){
    dummyData.push({taskText: task, completed:false});
    this.setState({
      todos: dummyData
    })
  }
  componentDidMount(){
    this.setState({
      todos: dummyData
    })
  }
  render(){
    return(<div>
      <InputLine submit={(e, task)=>this.addTodo(e, task)}/>
      <TodoList todoXClick={(index)=>this.todoXClick(index)} todos={this.state.todos}/>
    </div>)
  }
}

export default TodoApp
