function Super (name){
    this.name = name
    this.colors =  ["red", "blue", "green"]
}
Super.prototype.sayName = function(){
    console.log(this.name);
}

function Sub (name, age){
    Super.call(this, name)
    this.age = age
}
// Sub.prototype = new Super()  把这行代码替换成下面一行
Sub.prototype = Object.create(Super.prototype)

Sub.prototype.constructor = Sub
Sub.prototype.sayAge = function(){
    console.log(this.age);
}




