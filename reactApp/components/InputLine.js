import React from 'react';


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
export default InputLine
