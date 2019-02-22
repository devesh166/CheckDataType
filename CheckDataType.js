function checktype(x){
    
    if(x == null && typeof x == "object"){
        return "This is null"
    }
    else if(isNaN(x)&& typeof x == "number"){
        return "This is NaN";
    }
    else if(!x){
      
        return "This is Undefined";
   
   }
    
  
if(x.constructor ==Array){
    if(x[1].constructor== Object){
        console.log("This is an array of object :")  
    }else if(x[1].constructor== String){
        console.log("This is an array of String :")  
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


else{
    console.log("identifier cannot be resolved");
}



return x;

}

checktype( )
