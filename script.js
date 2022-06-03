const closestMultiple10 = num => {
  let temp = num%10
  let tempUp = 10-temp
  if (num / temp !== 0 && temp < 5) {
    num -= temp
  } else if (num / temp !== 0) {
    num += tempUp
  }
  return num;
};
