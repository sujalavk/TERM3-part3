class Person{
    name :string;
    constructor(n:string){
        this.name=n;
    }
    display=() =>console.log("base class "+this.name);
}   
class Customer extends Person{


show=()=>console.log("derived class");

}

let c=new Customer("kiran");
c.display();
c.show();