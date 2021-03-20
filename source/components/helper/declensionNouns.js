function declensionNouns(num, textFormsArr) {
  const dozen = Math.abs(num) % 100;
  const unit = num % 10;

  if (dozen > 10 && dozen < 20) {
    return textFormsArr[2];
  }
  if (unit > 1 && unit < 5) {
    return textFormsArr[1];
  }
  if (unit === 1) {
    return textFormsArr[0];
  }
  return textFormsArr[2];
}

export default declensionNouns;
