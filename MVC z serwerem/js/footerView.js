UAM.footerView = function (container) {
  this.total = container.querySelector('#totalTasks');
  this.done = container.querySelector('#doneTasks');
  this.left = container.querySelector('#leftTasks');
  UAM.EventEmitter.call(this);
}

UAM.utils.inherits(UAM.EventEmitter, UAM.footerView);

UAM.footerView.prototype.updateFooter = function (stats) {
  this.total.innerHTML = stats.total;
  this.done.innerHTML = stats.done;
  this.left.innerHTML = stats.left;
}