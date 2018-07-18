function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let sum = Array.from(arguments)
    .reduce((acc, num) => {
      return acc * num;
    }, 1)
    .reduce((acc, num) => acc + num, 0);
  return Math.floor(Math.sqrt(sum) / 2);
}
