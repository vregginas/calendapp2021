const accbtn=document.querySelectorAll(".bt");
accbtn.forEach((open)=>{open.onclick=function(){
    
    this.classList.toggle("btopen");
    let content=this.nextElementSibling;
    if(content.style.display==("block")){
        content.style.display=("none");
    }else{
        content.classList.remove("btopen");
        content.style.display=("block");
    }
}})



