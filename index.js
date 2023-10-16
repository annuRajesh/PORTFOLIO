function fadein(){
    document.getElementById('headname').style.opacity=0.3
}
function fadeout(){
    document.getElementById('headname').style.opacity=1
}
x=["Development","Music","Adventure"]
let count=0
function display(){
    document.getElementById('role').innerHTML=x[count]
    count+=1
    if(count==x.length){
        count=0
    }
}
setInterval(display,2000)