interface IEmployee {
    empCode: number;
    name: string;
    getName:(number)=>string;
}

class Employee implements IEmployee { 
    empCode: number;
    name: string;

    constructor(code: number, name: string) { 
                this.empCode = code;
                this.name = name;
    }

    getName(empCode:number){ 
        return this.name;
    }

}

let emp = new Employee(1, "John");
console.log("Hello  "+emp.getName(1));