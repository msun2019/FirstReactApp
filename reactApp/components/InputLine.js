import React from 'react';


class InputLine extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      typedText: ''
    }
  }
  handleTyping(e){
    this.setState({
      typedText: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.submit(e, this.state.typedText)
  }
  render(){
    return (
    <div>
      <form>
        <input type="text"
          placeholder="New Task"
          onChange={(e)=>this.handleTyping(e)}
          value = {this.state.typedText}
        />
        <button onClick={(e)=>this.handleSubmit(e)} type='submit'>Add todo</button>
      </form>
    </div>
  )
  }
}
export default InputLine
