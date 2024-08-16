const printForecast = arr => {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += `in 1days...${i} - ${arr[i]} `;
  }
  return result.trim(); // trim to remove any trailing space
};
