import React from 'react';
import './TaskList.css';
import Task from '../task/Task.js';

class TaskList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    
  }

  allTasks = () => {

    // for (var i = 0; i<localStorage.length; i++) {
    //     this.state.tasks.push(localStorage.getItem(localStorage.key(i)));
    // };
    console.log("All tasks: " + this.state.tasks);
  }

  UNSAFE_componentWillMount() {
    this.allTasks();
  }

  // We use an arrow function so that 'this' refers to the TaskList and not within the scope of the 'createTask' function. Another option is to 'bind' the function.
  createTask = (e) => {

    if (e.key === 'Enter') {
      // let nextIndex = this.state.tasks.length;
      // console.log("index for task: "+nextIndex);
      // localStorage.setItem('task' + nextIndex, e.target.value);
      // console.log("index for retrieval of task: "+nextIndex);
      // console.log(localStorage.key(0));
      // this.state.tasks.push(localStorage.getItem('task'+nextIndex));
      console.log(this.state.tasks);
      console.log("item added to array, new lenght: "+this.state.tasks.length);
      // Calling setState will trigger componentDidUpdate and the render function. Or can use forceUpdate
      
      this.state.tasks.push(e.target.value);
      this.setState({tasks: this.state.tasks});
      // this.forceUpdate();
      document.getElementById('input').value = "";
    }
  }

  removeTask(i) {
    console.log("Removed task, task index: "+i);
    // localStorage.removeItem("task"+i);
    this.state.tasks.splice(i,1);
    this.setState({tasks: this.state.tasks});
  }

  render() {

    let taskArray = this.state.tasks;
    console.log("Array of tasks during render: "+taskArray);
    return (
      <div className="TaskList">

        
        <input id="input" placeholder="What needs doing?" onKeyDown={this.createTask}/>

        <ul>

          {taskArray.map((task, i) => {
            return <li style={{color: "white"}} key={i}> 
                      <span>
                        <Task id={i} value={task} /> 
                        
                        <button onClick={() => this.removeTask(i)}>Remove</button>
                      </span>
                   </li>;
          })}

        </ul>

      </div>
    );
  }
}

export default TaskList;