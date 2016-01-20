var React = require('react');

var TodoItem = React.createClass({
  render: function() {
  	return (
  	 <div>
  	   {this.props.data.text} 
  	 </div>
  	);
  }
});

module.exports = TodoItem;