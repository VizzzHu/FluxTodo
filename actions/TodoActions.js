var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {
  create: function(data) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATE,
      data: data,
    });
  },
};

module.exports = TodoActions;

