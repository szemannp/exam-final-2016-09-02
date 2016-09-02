// Create a function that counts the cars by colors
// With an output like: {red: 3, yellow: 2, white: 1, green: 1}

var cars = [{
    color: 'red',
    type: 'Volvo'
  }, {
    color: 'yellow',
    type: 'VW'
  }, {
    color: 'red',
    type: 'Ferrari'
  }, {
    color: 'white',
    type: 'Tesla'
  }, {
    color: 'yellow',
    type: 'Toyota'
  }, {
    color: 'red',
    type: 'Lada'
  }, {
    color: 'green',
    type: 'Trabant'
}];

var result = {};
var colors = [];
var getColors = function(array) {
  for (var i = 0; i < array.length; i++) {
    colors.push(array[i].color);
  }
};

var countColors = function(array) {
  array.forEach(function(element) {
    result[element] = (result[element] || 0) + 1;
  });
};

getColors(cars);
countColors(colors);
