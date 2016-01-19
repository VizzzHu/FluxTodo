var React = require('react');
var TodoItem = require('./TodoItem');

var TodoList = React.createClass({
  render: function() {
    return (
	    <TodoItem />
	  );
  },	
});

module.exports = TodoList;