var React = require('react');
var TodoActions = require('../actions/TodoActions.js');

var TodoItem = React.createClass({
  render: function() {
  	var textClassName = this.props.data.complete ? 'completedItem' : 'notCompletedItem';
  	return (
  	 <div>
  	   <input type='radio' onChange={this.completeItem} checked={this.props.data.complete}></input>
  	   <label className={textClassName}>{this.props.data.text}</label>
  	   <button className='deleteItem' onClick={this.deleteItem}>X</button>
  	 </div>
  	);
  },

  completeItem() {
    TodoActions.completeItem(this.props.data);
  },

  deleteItem() {
  	TodoActions.deleteItem(this.props.data);
  },
});

module.exports = TodoItem;