const multipleOfThree = (number) => {
  //Conver the number to string and split it, then reduce it to get the sum of the digits
  let sum = number
    .toString()
    .split("")
    .reduce(
      (accumulator, currentValue) =>
        parseInt(accumulator) + parseInt(currentValue)
    );
  //if the result is 3, 6 or 9 is a multiple of 3
  if (sum === 3 || sum === 6 || sum === 9) return true;
  //if the result is greather than 11, call the function again with the new sum
  if (sum > 11) return multipleOfThree(sum);
  //if the result is 0, 1, 2, 4, 5, 7, 8, 10 or 11 is not a multiple of 3
  return false;
};
