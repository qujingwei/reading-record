function Super (){
    this.colors = ['red','blue','green']
}

function Sub (){}
// 让Sub继承Super
Sub.prototype = new Super()

let instance1 = new Sub()
instance1.colors.push('black')
console.log(instance1.colors);

let instance2 = new Sub()
console.log(instance2.colors);