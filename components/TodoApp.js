var React = require('react');
var TodoInput = require('./TodoInput');
var TodoList = require('./TodoList');
var TodoStore = require('../stores/TodoStore');
var TodoStatus = require('./TodoStatus');

function getTodoState() {
  return {
    todoList: TodoStore.getAll(),
  };
}
var todoApp = React.createClass({

  getInitialState() {
    return getTodoState();
  },

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmont() {
    TodoStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.setState(getTodoState());
  },

  render() {
    return (
      <div>
        <div className='todoTitle'>TODOS</div>
        <TodoInput/>
        <TodoList data={this.state.todoList}/>
        <TodoStatus data={this.state.todoList}/>
      </div>
    );
  }
});

module.exports = todoApp;