var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {

  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server : try again after few time");
}



function clickHandler() {


  var inputNew = txtInput.value;

  fetch(getTranslationURL(inputNew))
    .then(response => response.json())
    .then(json => {
       var translatedText = json.contents.translated; 
       outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)


};

btnTranslate.addEventListener("click", clickHandler)