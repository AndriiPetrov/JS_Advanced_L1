function Human(name, age){
    this.name = name;
    this.age = age;
}

Human.prototype.toString = function(){
    return "[Name: " + this.name + "; Age: " + this.age + "] ";
}

var sort = function(array){
    var arrayup = new Array();
    arrayup = array;
    arrayup1 = array;
    for(var i = 0; i < array.length; i++){
        for( var j = 0 ; j < array.length; j++)
        if(array[j].age < array[i].age ){
            array[i] = array[j];
            array[j] = arrayup[i];
        }
    }
    return array;
}

var array = new Array(3);

array[0] = new Human("Andrew", 27);
array[1] = new Human("Alex", 26);
array[2] = new Human("Mask", 45);

array = sort(array);

for(var i = 0; i< array.length; i++){
    document.write(array[i].name + " " + array[i].age + " " + "<br>");
}

