const timeFromTheThird = () => {
  //get today's date, and the date Argentina won the third
  let third = new Date(2022, 11, 18);
  let now = new Date();

  //get the difference between the two dates
  let diff = now - third;

  //get the days, hours and minutes from the difference
  //to calculte it, we need to convert the difference to miliseconds, then divide it by the number of miliseconds in a day, hour and minute, and then get the integer part
  //finally, we substract the days, hours and minutes from the difference
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  let hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  let mins = Math.floor(diff / (1000 * 60));
  diff -= mins * (1000 * 60);

  return `Pasaron ${days} dias, ${hours} horas y ${mins} minutos desde el domingo 18 de diciembre de 2022`;
};

console.log(timeFromTheThird());
