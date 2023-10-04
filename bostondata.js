import { boston } from "./boston.js";

var newboston=boston.data;
 
     for(let i=0;i<newboston.length;i++){
         for(let j=i+1;j<newboston.length;j++){//this code for decending salary of employee
            if(newboston[i][11]<newboston[j][11]){
           let temp=newboston[i];
            newboston[i]=newboston[j];
         newboston[j]=temp;


        } 
     }
    }
     var output=newboston.slice(0,5);

     var ele="";
      for(let k=0;k<output.length;k++){
        ele=ele+"<h1>"+ output[k][8]+"</h1>" + "<h1>" +output[k][11]+"</h1>"
        console.log(output[k][8],output[k][11]);
       
     }
    document.getElementById("app").innerHTML=ele;
    
    var income="";
    for(let z=0;z<newboston.length;z++){
        var res=newboston[z][11]*12;
        
        if(res>=200000){
             console.log(res);
            income=income+"<h1>"+ newboston[z][8]+"</h1>" +"<h1>" +res+"</h1>"
        }
    }
    document.getElementById("income").innerHTML=income;