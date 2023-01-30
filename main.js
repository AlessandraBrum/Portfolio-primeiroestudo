const btn = document.getElementById ("btnTop")

btn.addEventListener("click", function (){
window.scrollTo (0,0)  
})

const onload = document.getElementById ("professionaexperiencetext").hidden=true;

function show(idObj){
    var obj=document.getElementById(idObj).hidden=false;
}

function hide(idObj){
    var obj=document.getElementById(idObj).hidden=true;
}

