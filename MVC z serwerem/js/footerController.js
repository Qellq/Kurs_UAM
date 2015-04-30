UAM.footerController = function (view, model) {

  // Functions passed later to event emitters which inform model what to do
  var updateFooter = function () {
    view.updateFooter(model.getStats());
  };

  // Create event emmiter ON functions
  model.on("updateFooter", updateFooter);
}