import React from 'react';
import './Task.css';

class Task extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  toggleDone(i) {
    this.setState({done: !this.state.done});
    console.log(this.state.done);
  }

  componentDidUpdate() {
    if(this.state.done){
      console.log(this.props.id);
      document.getElementById(this.props.id).style.setProperty("text-decoration", "line-through");
    }else{
      document.getElementById(this.props.id).style.setProperty("text-decoration", "none");
    }
  }

  render() {

    

    return (
      
        <span>
          <p id={this.props.id} className="Task">{this.props.value}</p>
          <button onClick={() => this.toggleDone(this.props.id)}>Done</button>
        </span>
    );
  }
}

export default Task;