const printForecast = arr => {
  for (let i = 0; arr.length; i++) {
    console.log(`$(i) - $arr[i]`);
  }
};

const printForecast = arr => {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += `in days...${i} - ${arr[i]} `;
  }
  return result.trim(); // trim to remove any trailing space
};
