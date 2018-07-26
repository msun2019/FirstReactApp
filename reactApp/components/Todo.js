import React from 'react';
class Todo extends React.Component{
  render(){
    return (
      this.props.task.completed ?
        (<strike>
          <li>
            <button onClick={() => this.props.xClick()}>X</button>
            {this.props.task.taskText}
          </li>
        </strike>)
      : (
        <li>
          <button onClick={() => this.props.xClick()}>X</button>
          {this.props.task.taskText}
        </li>
      )
    );
  }
}

export default Todo
