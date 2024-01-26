function loginCallback(response){
 // decodeJwtResponse() is a custom function defined by you
     // to decode the credential response.
     const responsePayload = decodeJwtResponse(response.credential);

     appLog("--------- LOGIN OK --------");
     appLog("ID: " + responsePayload.sub);
     appLog('Full Name: ' + responsePayload.name);
     appLog('Given Name: ' + responsePayload.given_name);
     appLog('Family Name: ' + responsePayload.family_name);
     appLog("Image URL: " + responsePayload.picture);
     appLog("Email: " + responsePayload.email);
}
function appLog(msg){
    console.log(msg);
    const child = document.createElement("DIV");
    child.innerText = msg;
    document.getElementById('result').appendChild(child);
}
function decodeJwtResponse(token){
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}