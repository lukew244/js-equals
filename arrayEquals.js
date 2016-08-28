Array.prototype.equals = function (array) {
  if (!array)
    return false;

  if (this.length != array.length)
    return false;

  for(var i = 0, l = this.length; i < l; i++) {
    if (this[i] instanceof Array && array[i] instanceof Array){
      if (!this[i].equals(array[i]))
      return false;
    }
    else if (this[i] != array[i]) {
      return false;
    }
  }
    return true;
};


var string = 'string';
var array1 = [1,2,3];
var array2 = [1,2,3];
var array3 = [1,[2,2],3];
var array4 = [1,[2,2],3];

console.log('expect false: ' + array1.equals(string));
console.log('expect true: ' + array1.equals(array2));
console.log('expect true: ' + array1.equals(array1));
console.log('expect false: ' + array2.equals(array3));
console.log('expect true: ' + array3.equals(array4));
console.log('expect false: ' + array2.equals(null));
