const rootPart = {
  "name": "crank_shaft_piston",
  "children": [
    {
      "name": "bearing_inferior",
      "price": 15
    },
    {
      "name": "bearing_superior",
      "price": 20
    },
    {
      "name": "piston_and_crankshaft",
      "price": 0,
      "children": [
        {
          "name": "piston",
          "price": 10
        },
        {
          "name": "bearing_shell",
          "price": 5
        },
        {
          "name": "wrist_pin",
          "price": 2
        },
        {
          "name": "connections_rod",
          "price": 7
        },
        {
          "name": "bearing_inferior",
          "price": 15
        },
        {
          "name": "bearing_superior",
          "price": 20
        },
        {
          "name": "cover",
          "price": 8
        }
      ]
    }
  ],
  "price": 0
};

// return an array of all the children for the dictionary
var childArray = [];
const childChecker = (part) => {
  var index = '';
  if (part['children']) {
    index = part['children'];
    for (let i = 0; i < index.length; i += 1) {
      childChecker(index[i])
    }
  } else {
    childArray.push(part['price']);
  }
  return childArray;
};


const computePrice = (part) => {
  var dataArray = childChecker(part);
  var temp = 0;
  for (let k = 0; k < dataArray.length; k += 1) {
    temp += dataArray[k];
  }
  return temp;
}

console.log(computePrice(rootPart));