
function appLog(msg){
    console.log(msg);
    const child = document.createElement("DIV");
    child.innerText = msg;
    document.getElementById('result').appendChild(child);
}
