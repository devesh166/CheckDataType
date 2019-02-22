function checktype(x){
if(x.constructor ==Array){
    if(x[1].constructor== Object){
        console.log("This is an array of object :")  
    }else{
        console.log("This is an array  :");
    }
}
else if(x.constructor ==String){
    console.log("This is an String :");
}
else if(x.constructor ==Number){
    console.log("This is an Number:");
}
else if(x.constructor ==Object){
    console.log("This is an Object :");
}
else if(x.constructor ==Function){
    console.log("This is a Function :");
}
else if(x.constructor ==Boolean){
    console.log("This is a Boolean :");
}
else if(x == null){
    console.log("This is null");

}
else if(isNaN(x)){
    console.log("This is NaN");
}
else{
    console.log("This is Undefined");
}



return x;

}

checktype([{a:1},{a:1},{a:1}])
