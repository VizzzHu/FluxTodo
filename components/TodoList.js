var React = require('react');
var TodoItem = require('./TodoItem');

var TodoList = React.createClass({
  render: function() {
  	var list = this.props.data.map(function(todo, i) {
  	  return (
  	  	<TodoItem data={todo} key={i}/>
  	  );
  	});

    return (
      <div>
        {list}
	  </div>
	);
  },	
});

module.exports = TodoList;