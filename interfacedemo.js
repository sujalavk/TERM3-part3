var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.name = name;
    }
    Employee.prototype.getName = function (empCode) {
        return this.name;
    };
    return Employee;
}());
var emp = new Employee(1, "John");
console.log("Hello  " + emp.getName(1));
