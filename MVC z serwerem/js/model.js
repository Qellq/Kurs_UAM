UAM.Model = function () {
  UAM.EventEmitter.call(this);

  // Define data structures to store todos and statistics for the footer
  this.todosArray = new Array();
  this.statistics = {
    total: 0,
    done: 0,
    left: 0
  }
};

// Inherit on and emit methods
UAM.utils.inherits(UAM.EventEmitter, UAM.Model);

// Notify contriller to refresh footer and todo list
UAM.Model.prototype.notifyController = function () {
  this.emit("updateView");
  this.emit("updateFooter");
};

// Function pushing todos to the list
UAM.Model.prototype.addTodo = function ( todo ) {
    this.todosArray.push({todo:todo, done: 0});
    UAM.utils.exectuteHttpRequest('/api/todos','POST',function (res) {}, this.todosArray);
    this.recountStats();
    this.notifyController();
};

// Function marking item as done
UAM.Model.prototype.markDone = function ( todo ) {
  var index = UAM.utils.getObjectIndex(this.todosArray,todo,'todo');
  this.todosArray[index].done = 1;
  UAM.utils.exectuteHttpRequest('/api/todos','POST',function (res) {}, this.todosArray);
  this.recountStats();
  this.emit("updateFooter");
};

// Get todo list
UAM.Model.prototype.getData = function() {
  return this.todosArray;
};

// Get list statistics
UAM.Model.prototype.getStats = function() {
  return this.statistics;
};

// Recount statistics basing on todo list
UAM.Model.prototype.recountStats = function() {
  this.statistics.total = this.todosArray.length;
  this.statistics.done = UAM.utils.getObjectFrequency(this.todosArray,1,'done');
  this.statistics.left = this.statistics.total - this.statistics.done;
};

UAM.Model.prototype.saveDataFromServer = function (res) {
  this.todosArray = res;
  this.notifyController();
}



