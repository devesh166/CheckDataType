 checktype =(x)=>{
    
    if(x == null && typeof x == "object"){
        return "This is null"
    }
    else if(isNaN(x)&& typeof x == "number"){
        return "This is NaN";
    }
    else if(!x){
      
        return "This is Undefined";
   
   }
    
  
else if(x.constructor ==Array ){
    if(x[0].constructor== Object){
        console.log("This is an array of object :")  
        console.log("[")
      x.map( function(f,i){
        var keys = Object.keys(f);
        // value = [];
         var values = Object.values(f);
         console.log("{")
         keys.map( (v,i)=>{
            console.log(v + ":" + values[i]);
    
        })
         console.log("}")
         //console.log(",")
     })
     console.log("]")

    }else if(x[0].constructor== String){
        console.log("This is an array of String :")  
    }else{
        console.log("This is an array  :");
        
        console.log(x.map((v)=>{
            console.log(v);
        }))


    }

      
}
else if(x.constructor ==String){
    console.log("This is an String :");
    return x;
}
else if(x.constructor ==Number){
    console.log("This is an Number:");
    return x;
}
else if(x.constructor ==Object){
     console.log("This is an Object :");
     var keys = Object.keys(x);
    // value = [];
     var values = Object.values(x);
     console.log("{")
     keys.map( (v,i)=>{
        console.log(v + ":" + values[i]);

    })
     console.log("}")

}
else if(x.constructor ==Function){
    console.log("This is a Function :");
    return x;
}
else if(x.constructor ==Boolean){
    console.log("This is a Boolean :");
    return x;
}


else{
    console.log("identifier cannot be resolved");
}





}

checktype( )
 
