import React from 'react';
import ReactDom from 'react-dom';


let dummyData = ["Wash dishes", "Do laundry"];

class TodoList extends React.Component{
  render(){
    return (
      <ul>
        {dummyData.map((todo) => <Todo task={todo}/>)}
      </ul>
    )
  }
}
class Todo extends React.Component{
  render(){
    console.log(this.props.task)
    return (

      <li><button>X</button>{this.props.task}</li>
    )
  }
}
ReactDom.render(<TodoList/>, document.getElementById('root'))
