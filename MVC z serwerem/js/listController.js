UAM.listController = function (view, model) {

  UAM.utils.exectuteHttpRequest('/api/todos','GET',function (res) {
    if (res) {
      model.saveDataFromServer(res);
    }
  })
  // Functions passed later to event emitters which inform model what to do
  var updateView = function () {
    view.updateView(model.getData());
  };
  var markDone = function (todo) {
    model.markDone(todo);
  };

  // Create event emmiter ON functions
  model.on("updateView", updateView);
  view.on("markDone", markDone);
}