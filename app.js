var btnTransalate = document.querySelector("#btn-transalate");
var log = console.log;
var text = document.querySelector("#text-input");
var outputTranslate = document.querySelector("#output"); 
 
var serverUrl = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationUrl(text){

   return serverUrl + "?" + "text" + text
}



  function clickHandler(){


   var inputText = txtInput.value;

   fetch(getTranslationUrl(text))
     .then(response => response.json())
     .then(json => log(json))

   log("clicked!");
}

btnTransalate.addEventListener("click" , clickHandler())