var React = require('react');
var TodoInput = require('./TodoInput');
var TodoList = require('./TodoList');

var todoApp = React.createClass({
  render: function() {
    return (
      <div>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
});

module.exports = todoApp;