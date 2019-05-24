class Student{
    name:string;
    constructor(myname:string)
    {
        this.name=myname;

    }
   show()  {
console .log("welcome  "+this.name);
   }
}
let s=new Student("sujala");
s.show();
