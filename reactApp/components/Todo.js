import React from 'react';
class Todo extends React.Component{
  render(){
    return (
      this.props.task.completed ?
        (<strike>
          <li>
            <button>X</button>
            {this.props.task.taskText}
          </li>
        </strike>)
      : (
        <li>
          <button>X</button>
          {this.props.task.taskText}
        </li>
      )
    );
  }
}

export default Todo
