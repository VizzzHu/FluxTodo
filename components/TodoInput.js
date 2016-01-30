var React = require('react');
var TodoActions = require('../actions/TodoActions.js');

var TodoInput = React.createClass({

  getInitialState() {
    return {
      value: '',
    };
  },

  render: function() {
    return (
      <div className='todoInput'>
        <input
          value = {this.state.value}
          type='text'
          className="todoInput"
          placeholder='What needs to be done?'
          onChange={this._onChange}
          onKeyDown={this._save} />
      </div>
    );
  },

  _onChange(e) {
    this.setState({
      value: e.target.value,
    });
  },

  _save(e) {
    // for mouse enter
    if (e.keyCode === 13 && e.target.value) {
      debugger;
      TodoActions.create(e.target.value);
      this.setState({
        value: '',
      });
    }
  }
});

module.exports = TodoInput;