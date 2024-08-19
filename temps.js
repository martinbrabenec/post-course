const printforecast = (arr) => {
    return arr.map((value, index) => '${value}, ${index})'; 
};

console.log(printforecast(1, 10, 20));

//hello