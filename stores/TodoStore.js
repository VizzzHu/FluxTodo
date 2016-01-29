var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _todos = [];

var TodoStore = assign({}, EventEmitter.prototype, {
  getAll() {
    return _todos;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case TodoConstants.TODO_CREATE:
      var newTodoItem = {
        text: action.data,
        complete: false,
      };
      _todos.push(newTodoItem);
    break;

    default:
  }
  TodoStore.emitChange();
});

module.exports = TodoStore;

module.exports = TodoStore;