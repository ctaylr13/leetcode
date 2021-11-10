// Implement a method to return the value from an array of integers that is closest to zero.
// If there are two equally close to zero elements like 2 and -2 - consider the positive element to be "closer" to zero.

// input: [-8, 3, 11, 2, 1, 4, 21, -3, -2 ] 
// output: 1 

const inputArray = [-8, 3, 11, 2, 1, 4, 21, -3, -2];


// temp postive array & temp negative array 
// loop over input array and place accordingly 
// sort tempPostive and tempNegative from biggest to smallest 
// return both of the smallest values from array 
// compare them (doing absolute value on the negative one), Some conditional for that last value 

const closeToZero = (arrayOfInts) => {
  let positiveArray = []; // will hold positive values 
  let negativeArray = []; // will hold negative values 
  for (var i = 0; i < arrayOfInts.length; i += 1) {
    if (arrayOfInts[i] > 0) {
      positiveArray.push(arrayOfInts[i]);
    } else if (arrayOfInts[i] < 0) {
      negativeArray.push(arrayOfInts[i]);
    }
  }

  positveArray = positiveArray.sort((a, b) => a - b);
  negativeArray = negativeArray.sort((a, b) => a - b);

  const positiveNumber = positiveArray[0];
  const negativeNumber = negativeArray.slice(-1);


  if (positiveNumber === Math.abs(negativeNumber)) {
    return positiveNumber;
  } else if (positiveNumber < Math.abs(negativeNumber)) {
    return positiveNumber;
  } else if (Math.abs(negativeNumber) < positiveNumber) {
    return negativeNumber;
  }
};

console.log(closeToZero(inputArray));