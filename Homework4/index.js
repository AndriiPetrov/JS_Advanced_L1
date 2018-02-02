function Message(username){
    this.message = "Hello ";
    this.username = username;
}

Message.prototype.toString = function(){
    return this.message + this.username;
}

var first = new Message("Andrew");

console.log(first.toString());