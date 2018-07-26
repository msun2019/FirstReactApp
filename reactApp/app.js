import React from 'react';
import ReactDom from 'react-dom';


let dummyData = ["Wash dishes", "Do laundry"];

class TodoList extends React.Component{
  render(){
    return (
      <div>
        <InputLine/>
        <ul>
          {dummyData.map((todo) => <Todo task={todo}/>)}
        </ul>
      </div>

    )
  }
}
class Todo extends React.Component{
  render(){
    return (
      <li><button>X</button>{this.props.task}</li>
    )
  }
}
class InputLine extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      task: ''
    }
  }
  handleSubmit(e){
    e.preventDefault();
    alert()
  }
  handleChange(e){
    this.setState({
      task: e.target.value
    })
  }
  render(){
    return (
    <div>
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <input type="text"
          placeholder="New Task"
          onChange={(e)=>this.handleChange(e)}
        />
        <button type='submit'>Add todo</button>
      </form>
    </div>
  )
  }
}
ReactDom.render(<TodoList/>, document.getElementById('root'))
