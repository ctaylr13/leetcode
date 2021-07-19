// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

var l1 = [2, 4, 3];
var l2 = [5, 6, 4];

var a = ['1', '2', '3']
var result = a.map(function (x) {
  return parseInt(x, 10);
});



const addTwoNumbers = (list1, list2) => {
  var flipped1 = list1.reverse().join("");
  flipped1 = parseInt(flipped1);
  var flipped2 = list2.reverse().join("");
  flipped2 = parseInt(flipped2);
  var sum = flipped1 + flipped2;
  return sum;
}

console.log(addTwoNumbers(l1, l2));