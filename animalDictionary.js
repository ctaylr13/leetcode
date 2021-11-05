const csv = `id,animal,region
1001,elephant,India
1002,elephant,Africa
1003,elephant,India
1004,tiger,Africa
1005,tiger,Africa
1006,tiger,Africa
1007,tiger,Siberia
1008,tiger,Siberia
1009,zebra,Africa
1010,zebra,Africa
1011,zebra,Africa
1012,zebra,Africa
1013,zebra,Africa
1014,zebra,Africa
1015,zebra,Africa
1016,lion,Africa
1017,lion,Africa
1018,lion,Africa
1019,lion,Africa
1020,kangaroo,Australia
1021,kangaroo,Australia
1022,kangaroo,Australia`;


const histogram = (csv, column) => {
  var csvArray = csv.split('\n');
  // console.log('csvArray', csvArray);
  var headerArray = csvArray[0].split(',');
  var columnIndex; // index of the column we are looking for 
  for (let i = 0; i < headerArray.length; i += 1) {
    if (column === headerArray[i]) {
      columnIndex = i;
    }
  }

  // loop over the entire csv 
  var keySet = {};
  for (let i = 1; i < csvArray.length; i += 1) {
    if (keySet[csvArray[i].split(',')[columnIndex]]) {
      keySet[csvArray[i].split(',')[columnIndex]] += 1;
    } else {
      keySet[csvArray[i].split(',')[columnIndex]] = 1;
    }
  }

  // return keySet;

  var valueDict = [];

  for (let x in keySet) {
    valueDict.push({ value: x, count: keySet[x] });
  }

  valueDict.sort((a, b) => a.count - b.count);

  return valueDict;
};

console.log(histogram(csv, "animal"));


// example 
// [
// 	{value: "elephant", count: 3},
// {value: "kangaroo", count: 3},
// {value: "lion", count: 4},
// {value: "tiger", count: 5},
// {value: "zebra", count: 7},
// ]
