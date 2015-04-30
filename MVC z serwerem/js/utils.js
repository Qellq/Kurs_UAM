UAM.utils = {
  // Inherit prototype functions
	inherits: function (Parent, Child) {
		Child.prototype = Object.create(Parent.prototype);
		Child.prototype.constructor = Child;
	},
	// Get object index in array for given object attribute
	getObjectIndex: function (array, element, nameOfAttr) {
	  var elements = array.map(function(x) {return x[nameOfAttr]; });
	  return elements.indexOf(element);
	},
	// Count object in array with given attribute name equals to value
	getObjectFrequency: function (array, value, nameOfAttr) {
	  var count = 0, elements = array.map(function(x) {return x[nameOfAttr]; });
	  for (i = 0; i < elements.length; i++) {
	    if (elements[i] === value) count++;
	  }
	  return count;
	},
  // Generic function performing HTTP request
  exectuteHttpRequest: function(path, type, callback, requestData) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onload = function () {
			if (httpRequest.status !== 200) {
				alert('Request failed');
			} else {
			  callback(httpRequest.response);
			}
		};
		httpRequest.open(type, path);
    httpRequest.responseType="json";
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(requestData));
  }
};