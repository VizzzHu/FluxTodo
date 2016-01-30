var React = require('react');
var _ = require('../lib/lodash.js');

var TodoStatus = React.createClass({
  // getInitialState() {
  //   return this.calStatus(this.props.data);
  // },

  calStatus(data) {
    var todoItemNum = data.length;
    var completeItemNum = _.filter(data, (item) => item.complete).length;
    var leftItemNum =todoItemNum - completeItemNum;

    return {
      todoItemNum, 
      completeItemNum,
      leftItemNum,
    };
  },

	render: function() {
    var numbers = this.calStatus(this.props.data);

    var todoStatusLeft = null;
    var todoStatusAll = null;
    var todoStatusActive = null;
    var todoStatusCompleted = null;
    var todoStatusClear = null;
    var todoStatusClassName = numbers.todoItemNum ? 'todoStatus' : 'todoStatusHidden';

    if (numbers.todoItemNum) {
      todoStatusLeft = (
        <span className='todoStatusLeft'>{numbers.leftItemNum} items left</span>
      );
      todoStatusAll = (
        <a className='todoStatusLink'> All </a>
      )
      todoStatusActive = (
        <a className='todoStatusLink'> Active </a>
      )
      todoStatusCompleted = (
        <a className='todoStatusLink'> Completed </a>
      )
      todoStatusClear = (
        <a className='todoStatusLink'> Clear </a>
      )
    }

    return (
      <div className={todoStatusClassName}>
        {todoStatusLeft}
        {todoStatusAll}
        {todoStatusActive}
        {todoStatusCompleted}
        {todoStatusClear}
      </div>
    );
	},
});

module.exports = TodoStatus;