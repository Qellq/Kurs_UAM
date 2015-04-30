UAM.inputView = function (container) {
  this.input = container.querySelector('#newtask');
  this.button = container.querySelector('#add');

  UAM.EventEmitter.call(this);
  this.attachActions();
}

UAM.utils.inherits(UAM.EventEmitter, UAM.inputView);

// Function informing controller to add new value to the model
UAM.inputView.prototype.addElement = function () {
  var todo = this.input.value;
  if (todo) {
    this.emit('addItem', todo);
    this.input.value = '';
  }
};

// Bind button click with function adding element
UAM.inputView.prototype.attachActions = function () {
  var that = this;
  this.button.addEventListener('click', function () {
    that.addElement();
  });
};