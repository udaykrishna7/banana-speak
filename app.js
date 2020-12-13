var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl() {
    return serverUrl + "?" + "text=" + txtInput.value
}

function errorHandler(error){
    console.log("error occured" + error);
    alert("There is a problem with the server. Try again later");
}


function clickHandler() {
    
    var inputText = txtInput.value;

    // outputDiv.innerText = "asdjkha " + txtInput.value;
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
    };

btnTranslate.addEventListener("click", clickHandler)
