var Student = /** @class */ (function () {
    function Student(myname) {
        this.name = myname;
    }
    Student.prototype.show = function () {
        console.log("welcome  " + this.name);
    };
    return Student;
}());
var s = new Student("sujala");
s.show();
