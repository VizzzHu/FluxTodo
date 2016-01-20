var React = require('react');
var TodoActions = require('../actions/TodoActions.js');

var TodoInput = React.createClass({
  render: function() {
    return (
      <div>
        <input
          type='text'
          className="todoInput"
          placeholder='What needs to be done?'
          onKeyDown={this._save} />
      </div>
    );
  },

  _onChange() {
  	console.log('yes');
  },

  _save(e) {
    // for mouse enter
    if (e.keyCode === 13) {
      TodoActions.create(e.target.value);
    }
  }
});

module.exports = TodoInput;