function Box(height, width, debth, material){
    this.height= height;
    this.width= width; 
    this.debth = debth;
    this.material = material;
}

Box.prototype.volume = function(){
    return this.height * this.width * this.debth;
}

Box.prototype.equals = function(otherobj){
    return this.material === otherobj.material;
}
Box.prototype.toString() = function(){
    return "Volume of box1 is: " + this.volume() + "<br>";
}

var box1 = new Box(5, 6, 7, "metal");
var box2 = new Box(7, 8, 9, "metal");

var vol1 = box1.volume();
document.write("Volume of box1 is: " + vol1 + "<br>");

document.write(box2.toString());

res = box1.equals(box2);
document.write("box1 and box2 are equals: " + res + "<br>");
