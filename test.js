function Super (name){
    this.name = name
    this.colors =  ["red", "blue", "green"]
}
Super.prototype.sayName = function(){
    console.log(this.name);
}

function Sub (name, age){
    // 继承Super
    Super.call(this, name)
    this.age = age
}
Sub.prototype = new Super()
Sub.prototype.sayAge = function(){
    console.log(this.age);
}
Sub.prototype.constructor = Sub

let instance1 = new Sub('小明', 15)
instance1.colors.push('black')
console.log(instance1.colors);   //[ 'red', 'blue', 'green', 'black' ]
instance1.sayName() //小明
instance1.sayAge()  //15

let instance2 = new Sub('小王', 18)
instance2.sayName() //小王
instance2.sayAge()  //18
