const isString = (str) => {
  if (!str && str == "") {
    return false;
  }
  return true;
};

const isNumber = (number) => {
  if (!number && isNaN(number) == true) {
    return false;
  }
  return true;
};

module.exports = { isString, isNumber };
