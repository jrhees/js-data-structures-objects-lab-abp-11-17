// Write your solution in this file!
driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]:value});
}

function deleteFromDriverByKey(driver, key) {
  temp =  Object.assign({}, driver);
  delete temp[key];
  return temp;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
