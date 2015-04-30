// Main application file - initialize model, view and controller
var model = new UAM.Model();
var inputView = new UAM.inputView(document.querySelector("#addTask"));
var listView = new UAM.listView(document.querySelector("#tasks"));
var footerView = new UAM.footerView(document.querySelector("#footer"));
var inputController = new UAM.inputController(inputView, model);
var listController = new UAM.listController(listView, model);
var footerController = new UAM.footerController(footerView, model);


