var ObjectCreator = function(value1){
    this.value1 = value1;

    this.function1 = function(){
        document.write("Method Eczemplira");
    }
}

ObjectCreator.value2 = "Value2";

ObjectCreator.function2 = function(){
    return obj1.value1 + " " + ObjectCreator.value2;
}

var obj1 = new ObjectCreator("Value1");

obj1.function1();
document.write("<br>" + ObjectCreator.value2);
document.write("<br>" + ObjectCreator.function2());
