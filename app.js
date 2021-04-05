function btnclick(num){
document.getElementById("screen").value=document.getElementById("screen").value+num;
}
function clearA(){
    document.getElementById("screen").value=""
}
function ans(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}