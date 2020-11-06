import { Component } from 'react';
import './App.css';


function Task(props) {
  return (
    <div className="Task">
      <p>{props.item}</p>
      <button
        id={props.item}
        onClick={props.delete}
      >Remove</button>
    </div>
  );
}

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
    this.removeTask = this.removeTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  
  removeTask(e) {
    const id = e.target.id;
    const tasks = this.state.tasks;
    const itemIndex = tasks.indexOf(id);
    tasks.splice(itemIndex, 1);
    this.setState(state => ({
      tasks
    }));
  }
  
  addTask() {
    let task = document.querySelector('#add-task');
    const newTasks = [...this.state.tasks];
    newTasks.push(task.value);
    if (task.value.trim() !== '') {
      this.setState({
        tasks: newTasks
      });
      task.value = '';
      task.placeholder = 'Task';
    } else {
      task.placeholder = 'Please enter a task';
    }
  }
  
  render() {
    const tasks = this.state.tasks;
    return (
      <div className="App">
        <div id="todolist-field">
          <h1>To Do List App</h1>
          <input
            type="text"
            id="add-task"
            name="add-task"
            placeholder="Task"
          />
          <button
            onClick={this.addTask}
          >Add</button>
        </div>
        <div id="task-field">
          {tasks.map(task =>
          <Task
            key={task.toUpperCase()}
            item={task}
            delete={this.removeTask}
          />)}
        </div>
      </div>
    );
  }
  
}

export default App;
