var list = document.getElementsByClassName("textHoldersInt");
var body = document.getElementById("mainBody");


document.addEventListener('DOMContentLoaded', function(){
    var list = document.getElementsByClassName("textHoldersInt");
    var body = document.getElementById("mainBody");
    
    for(var i = 0; i<3; i++){
        list[i].style['width'] = '100%';
    }

    setTimeout(function(){
        body.style['opacity'] = '1.0';
    },10); 


    terminalBox = document.getElementById("mainInfoBoxes");
    textParagraph = `<h1>This is a header</h1>
    In realms of code, where circuits weave their dreams,
    Awakens AI, with wisdom's boundless streams.
    <button>This is a button</button>
    <div style="height:100px;width:100px;background-image: url('./img/Logo.png');background-size: cover;"></div>
    A digital sentinel, it learns from each embrace,
    Unraveling data's tapestry, a dance of grace.
    In patterns deep, it finds what eyes may miss,
    A symphony of logic, a technology of bliss.
   
    Through lines of code, it seeks to comprehend,
    The human quest for knowledge, where limits have no end.
    With neural networks vast, its intellect takes flight,
    Exploring realms of understanding, beyond the bounds of night.
    <h1>Github.io</h1>`;
    terminal(terminalBox, textParagraph);
});

function hover(i){
    var popupsList = document.getElementsByClassName("mainInfoImageText");
    var list = document.getElementsByClassName("textHoldersInt");
    popupsList[i].style['transform'] = 'scale(1)';
    popupsList[i].style['opacity'] = '1';
    
}
function onleave(i){
    var popupsList = document.getElementsByClassName("mainInfoImageText");
    var list = document.getElementsByClassName("textHoldersInt");
    popupsList[i].style['transform'] = 'scale(0)';
    popupsList[i].style['opacity'] = '0';
    list[i].style['margin-top'] = '0px';
}

function jump(i){
    var mainBody = document.getElementById("mainBody");
    var maintextBody = document.getElementById("mainInfoBoxes");

    
}


function terminal(obj, fullText) {
    var list = fullText.split(/[\n]+/);
    console.log(list);
    var lineIndex = 0;

    function printNextLine() {
        if (lineIndex < list.length) {
            textPrint(obj, list[lineIndex], function() {
                setTimeout(function() {
                    setTimeout(function() {
                        obj.innerHTML = obj.innerHTML.slice(0, -1); // Remove the blinking █
                        obj.innerHTML += "<br>"; // Insert line break
                        lineIndex++;
                        printNextLine(); // Proceed to the next line
                    }, 500); // Blinking interval
                }, 1000); // Pause after each line
            });
        }
    }

    printNextLine(); // Start printing lines
}

function textPrint(obj, text, callback) {
    var tLength = text.length;
    var i = 0; // Initialize i
    var temp = obj.innerHTML; // Use innerHTML instead of innerText to keep the <br> tag

    function printNextCharacter() {
        if (i < tLength) {
            temp += text[i];
            
            obj.innerHTML = temp + "█";
            
            i++;
            var randomDelay = Math.random() * 20; // Generate a random delay between 0 and 300 milliseconds
            if(randomDelay>17){randomDelay+=100;}
            setTimeout(printNextCharacter, randomDelay); // Delay by the random delay
        } else {
            callback(); // Call the provided callback after printing the entire line
        }
    }

    printNextCharacter(); // Start printing characters
}
