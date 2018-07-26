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
  addTodo(task){
    dummyData.push({taskText: 'task', completed:false});
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
      <InputLine submit={this.addTodo}/>
      <TodoList todos={this.state.todos}/>
    </div>)
  }
}

export default TodoApp