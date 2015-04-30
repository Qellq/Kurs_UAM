UAM.listView = function (container) {
  this.list_item = container;
  UAM.EventEmitter.call(this);
  this.attachActions();
};

UAM.utils.inherits(UAM.EventEmitter, UAM.listView);

// Function updating view with current informations stored in the model
UAM.listView.prototype.updateView = function (todos) {

  var list = document.getElementById('tasks'), text = '';

  // Clear the list
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Add element one by one
  for( var i = 0; i < todos.length; i++ ){
    var text = document.createElement('li');
    text.innerHTML = todos[i].todo + '';
    if (todos[i].done === 1) {
      text.className = 'done';
    }
    document.querySelector("#tasks").appendChild(text);
    text = '';
  }
};

// Function ran after list element is clicked
UAM.listView.prototype.markSolvedElement = function (elem) {
  elem.className = 'done';
  this.emit('markDone',elem.innerHTML);
};

// Bind button click with function adding element
UAM.listView.prototype.attachActions = function () {
  var that = this;
  this.list_item.addEventListener('click', function () {
    that.markSolvedElement(event.target);
  });
};