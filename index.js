let me = {
    name:"Arti",
    age :20,
    thisInarrow:()=>{
        console.log("My name is"+this.name);
    },
    printallDetailsOFuser(){
        const findName =()=>{
        console.log("My name is "+ this.name);
        }
    const printage=()=>{
        console.log("My age is  " + this.age);
    }
    findName();
    printage();

    }
}
me.printallDetailsOFuser();