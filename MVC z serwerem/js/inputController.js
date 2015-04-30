UAM.inputController = function (view, model) {

  // Functions passed later to event emitters which inform model what to do
  var addItem = function (todo) {
    model.addTodo(todo);
  };

  // Create event emmiter ON functions
  view.on("addItem", addItem);
};