function instructions() {
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
    oReq.withCredentials = true;
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://apps.who.int/gho/athena/api/", "jsonp");
const response = {
  statusCode: 200,
  headers: {
    "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
    "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS 
  }
};
oReq.send();
}