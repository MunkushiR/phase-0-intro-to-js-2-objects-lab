const city = "employee";
const employee = {}
function updateEmployeeWithKeyAndValue(employees, key, value) {
  //this function should take in a employee Object, a key and a value. The function should not mutate the employee parameter and return a new employee that has an updated value for the key passed in.
  return Object.assign({}, employees, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  //this function should work the same as updateemployeeWithKeyAndValue() but it should mutate the employee parameter passed in.
  employee[key] = value;

  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  // this function should take in a employee Object and a key. It should delete the key/value pair for the key that was passed in from the employee Object. This should all not actually mutate the employee passed in.
  const NEW_OBJ =  Object.assign({}, employee);
  delete NEW_OBJ[key];
  return NEW_OBJ;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
//this function should work the same as deleteFromemployeeByKey() but it should mutate the employee passed in.
Object.assign({}, employee);
delete employee[key];
return employee;
}