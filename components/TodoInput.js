var React = require('react');

var TodoInput = React.createClass({
  render: function() {
    return (
      <div>
        <input type='text' className="todoInput" placeholder='What needs to be done?'></input>
      </div>
    );
  }
});

module.exports = TodoInput;