const API="your api key";

import { navbar } from "../components/navbar.js";
let n=document.getElementById("navbar");
n.innerHTML=navbar();

import { searchImages,append } from "./fetch.js";

let search=(e)=>{
    if(e.key==="Enter"){
        let value=document.getElementById("query").value;
        searchImages(API,value).then((data)=>{
            
            console.log(data);
            let container=document.getElementById("container");
            container.innerHTML=null;
            append(data.results,container);
        });
        
    }
};

document.getElementById("query").addEventListener("keydown",search);

let categories =document.getElementById("categories").children;
console.log(categories);

function cSearch(){
    console.log(this.id);
    searchImages(API,this.id).then((data)=>{
            
        console.log(data);
        let container=document.getElementById("container");
        container.innerHTML=null;
        append(data.results,container);
    });
}
for(let el of categories){
    el.addEventListener("click",cSearch);
}



//     }
// }


