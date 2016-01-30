var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');
var _ = require('../lib/lodash.js');

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

    case TodoConstants.DELETE_ITEM:
      _todos = _.reject(_todos, (todo) => todo === action.data);
      break;

    case TodoConstants.COMPLETE_ITEM:
      _todos = _.map(_todos, (todo) => {
        if (todo === action.data) {
          todo.complete = !todo.complete;
        }
        return todo;
      });
      break;

    default:
  }
  TodoStore.emitChange();
});

module.exports = TodoStore;

module.exports = TodoStore;