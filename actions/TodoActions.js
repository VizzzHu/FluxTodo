var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {
  create: function(data) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATE,
      data: data,
    });
  },

  deleteItem: function(data) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.DELETE_ITEM,
      data: data,
    });
  },

  completeItem: function(data) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.COMPLETE_ITEM,
      data: data,
    });
  },
};

module.exports = TodoActions;

